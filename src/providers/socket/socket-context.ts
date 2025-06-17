import { createContext, useContext } from "react";
import { EventKeys, MethodKeys, SocketEvents, SocketMethods } from "./types";

export const useWebSocket = () => {
	const context = useContext(WebSocketContext);
	if (!context) {
		throw new Error("useWebSocket must be used within a WebSocketProvider");
	}
	return context;
};

export interface WebSocketContextType {
	on<K extends EventKeys>(event: K, handler: SocketEvents[K]): void;
	off<K extends EventKeys>(event: K, handler: SocketEvents[K]): void;
	invoke<M extends MethodKeys>(method: M, ...args: Parameters<SocketMethods[M]>): Promise<ReturnType<SocketMethods[M]>>;
	isConnected: boolean;
}

export const WebSocketContext = createContext<WebSocketContextType | null>(null);
