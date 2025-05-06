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
  
  type WebSocketContextType = {
    on: (event: string, handler: (...args: any[]) => void) => void;
    off: (event: string, handler: (...args: any[]) => void) => void;
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
      const start = async () => {
        if (connection.state === signalR.HubConnectionState.Disconnected) {
          try {
            await connection.start();
            console.log("✅ SignalR connected");
          } catch (err) {
            console.error("❌ SignalR connection failed", err);
          }
        }
      };
  
      start();
  
      return () => {
        connection.stop();
      };
    }, []);
  
    return (
      <WebSocketContext.Provider value={{ on, off }}>
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
  