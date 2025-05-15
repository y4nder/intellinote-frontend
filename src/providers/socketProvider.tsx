import {
    createContext,
    useContext,
    useEffect,
    useRef,
    ReactNode,
    useCallback,
  } from "react";
import * as signalR from "@microsoft/signalr";
import { GetAuthKey } from "@/lib/local-stores";
import { useState } from "react";
import { tokenRefresh } from "@/lib/axios";

  
type WebSocketContextType = {
  on: (event: string, handler: (...args: any[]) => void) => void;
  off: (event: string, handler: (...args: any[]) => void) => void;
  isConnected: boolean;
};
  
const WebSocketContext = createContext<WebSocketContextType | null>(null);
  
// Set up the connection
const connection = new signalR.HubConnectionBuilder()
  .withUrl("https://localhost:7050/note-hub", {
    accessTokenFactory: () => GetAuthKey()?.access_token!,
  })
  .configureLogging(signalR.LogLevel.Information)
  .withAutomaticReconnect()
  .build();
  
export const WebSocketProvider = ({ children }: { children: ReactNode }) => {
    const handlersRef = useRef<Map<string, Set<(...args: any[]) => void>>>(new Map());
    const [isConnected, setIsConnected] = useState(false);
  
    const on = useCallback((event: string, handler: (...args: any[]) => void) => {
      if (!handlersRef.current.has(event)) {
        handlersRef.current.set(event, new Set());
      }
      handlersRef.current.get(event)!.add(handler);
      connection.on(event, handler);
    }, []);
  
    const off = useCallback((event: string, handler: (...args: any[]) => void) => {
      handlersRef.current.get(event)?.delete(handler);
      connection.off(event, handler);
    }, []);
  
    useEffect(() => {
      let isMounted = true;
    
      const startConnection = async () => {
        const token = GetAuthKey()?.access_token;
        if (!token) {
          console.warn("🚫 Cannot start SignalR: No access token");
          return;
        }
    
        try {
          await connection.start();
          if (isMounted) {
            console.log("✅ SignalR connected");
            setIsConnected(true);
          }
        } catch (err: any) {
          console.error("❌ SignalR connection failed", err);
    
          // If it's a 401, attempt to refresh the token and retry
          if (
            err?.message?.includes("Status code '401'") ||
            err?.statusCode === 401
          ) {
            console.log("🔁 Attempting to refresh token and reconnect...");
    
            try {
              await tokenRefresh(); 
              await connection.start(); // retry after refreshing
              if (isMounted) {
                console.log("✅ SignalR reconnected after refresh");
                setIsConnected(true);
              }
            } catch (retryErr) {
              console.error("❌ Reconnect after refresh failed", retryErr);
            }
          } else {
            setIsConnected(false);
          }
        }
      };
    
      startConnection();
    
      return () => {
        isMounted = false;
        connection.stop();
      };
    }, []);
  
    return (
      <WebSocketContext.Provider value={{ on, off, isConnected }}>
        {children}
      </WebSocketContext.Provider>
    );
  };
  
// Hook to use in components
export const useWebSocket = () => {
  const context = useContext(WebSocketContext);
  if (!context) {
    throw new Error("useWebSocket must be used within a WebSocketProvider");
  }
  return context;
};
  