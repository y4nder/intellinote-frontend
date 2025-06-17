import { useEffect, useRef, ReactNode, useCallback, useState } from "react";
import * as signalR from "@microsoft/signalr";
import { GetAuthKey } from "@/lib/local-stores";
import { tokenRefresh } from "@/lib/axios";
import { WebSocketContext } from "./socket-context";
import { EventKeys, SocketEvents, MethodKeys, SocketMethods } from "./types";

const BASE_URL = import.meta.env.VITE_API_BASE_URL as string;
const socketEndpoint = import.meta.env.VITE_SOCKET_URL as string;

export const WebSocketProvider = ({ children }: { children: ReactNode }) => {
	const handlersRef = useRef(new Map<EventKeys, Set<SocketEvents[EventKeys]>>());

	const [isConnected, setIsConnected] = useState(false);
	const connectionRef = useRef<signalR.HubConnection | null>(null);

	const on = useCallback(<K extends EventKeys>(event: K, handler: SocketEvents[K]) => {
		if (!handlersRef.current.has(event)) {
			handlersRef.current.set(event, new Set());
		}
		handlersRef.current.get(event)!.add(handler);
		connectionRef.current?.on(event, handler);
	}, []);

	const off = useCallback(<K extends EventKeys>(event: K, handler: SocketEvents[K]) => {
		handlersRef.current.get(event)?.delete(handler);
		connectionRef.current?.off(event, handler);
	}, []);

	const invoke = useCallback(async <M extends MethodKeys>(method: M, ...args: Parameters<SocketMethods[M]>) => {
		return await connectionRef.current!.invoke(method, ...args);
	}, []);

	useEffect(() => {
		let isMounted = true;

		const startConnection = async () => {
			const token = GetAuthKey()!.access_token!;

			const connection = new signalR.HubConnectionBuilder()
				.withUrl(`${BASE_URL}/${socketEndpoint}`, {
					accessTokenFactory: () => token,
					transport: signalR.HttpTransportType.WebSockets,
				})
				.configureLogging(signalR.LogLevel.Information)
				.withAutomaticReconnect()
				.build();

			connectionRef.current = connection;

			try {
				await connection.start();
				if (isMounted) {
					console.log("✅ SignalR connected");
					setIsConnected(true);
				}
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
			} catch (err: any) {
				console.error("❌ SignalR connection failed", err);
				if (err?.message?.includes("Status code '401'") || err?.statusCode === 401) {
					try {
						await tokenRefresh();
						await connection.start();
						if (isMounted) {
							console.log("✅ Reconnected after token refresh");
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
			connectionRef.current?.stop();
		};
	}, []);

	return <WebSocketContext.Provider value={{ on, off, isConnected, invoke }}>{children}</WebSocketContext.Provider>;
};
