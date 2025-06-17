import { WebSocketProvider } from "@/providers/socket/socket-provider";
import { PropsWithChildren } from "react";

const AppLayout = ({ children }: PropsWithChildren) => {
	return (
		<div>
			<WebSocketProvider>
				<main>{children}</main>
			</WebSocketProvider>
		</div>
	);
};

export default AppLayout;
