import { cn } from "@/lib/utils";
import Sidebar from "@/components/sidebar/Sidebar";
import ChatPanel from "@/components/nora-ai-chat/ChatPanel";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Outlet } from "react-router-dom";
import { useSidebar } from "@/providers/sidebar/sidebar-context";
import { setUser } from "@/redux/slice/auth";
import { useGetCurrentUser } from "@/service/auth/get-current.user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDebugSocket, useStandardNotificationSocket } from "@/hooks/sockets";
import CoolNotification from "@/components/notifications/cool-notification";
import PillNotification from "@/components/notifications/pill-notification";
	
import { useTheme } from "@/providers/theme/theme-context";

export default function MainLayout() {
	const { isCollapsed } = useSidebar();
	const { isCollapsed: isChatCollapsed } = useSelector((state: RootState) => state.chatAgent);

	const { data: user, isError: isErrorCurrentUser } = useGetCurrentUser();

	const navigate = useNavigate();
	const dispatch = useDispatch();

	useEffect(() => {
		if (user) {
			console.log("who am i response: ", user);
			dispatch(setUser(user));
		}

		if (isErrorCurrentUser) {
			console.error("error who am ai response: ", user);
			navigate("/auth/login");
		}
	}, [user, dispatch, isErrorCurrentUser, navigate]);

	const { selectedNote } = useSelector((state: RootState) => state.folderNotes);

	const { getTheme } = useTheme();
	const isDark = getTheme() === "dark";

	// done change to proper standard socket
	useStandardNotificationSocket((notification) => {
		console.log("global notif:", notification.id, "selected:", selectedNote?.id);
		if (selectedNote?.id !== notification.id) {
			toast(
				<CoolNotification
					type={notification.type}
					title={notification.title}
					content={notification.message}
					name={notification.name}
					id={notification.id}
				/>,
				{
					autoClose: 8000,
					className: "bg-surface",
					position: "bottom-center",
					theme: isDark ? "dark" : "light",
				}
			);
		} else {
			console.log("skipped global notif");
		}
	});

	useDebugSocket((notification) => {
		console.log("app layout: ", notification);
		toast(PillNotification, {
			className: "p-0 min-w-[200px] flex items-center gap-3 rounded-full px-4 py-2 shadow-md text-sm",
			data: {
				message: notification,
				milliSeconds: 1,
			},
			autoClose: 1000,
			closeButton: false,
			position: "bottom-left",
			theme: isDark ? "dark" : "light",
		});
	});

	return (
		<div className="flex h-screen overflow-hidden bg-background">
			<div
				className={cn(
					"fixed md:relative z-20",
					isCollapsed && "translate-x-[-100%] md:translate-x-0 md:w-16",
					!isCollapsed && "translate-x-0 w-52",
					"transition-all duration-300"
				)}
			>
				<Sidebar />
			</div>

			<main className={cn("flex-1 overflow-y-auto transition-all duration-300 relative")}>
				<Outlet />
			</main>

			<div
				className={cn(
					"md:relative z-10",
					isChatCollapsed ? "translate-x-[100%] md:translate-x-[100%] md:w-0 w-0" : "fixed translate-x-[0%] right-0 w-full md:w-[400px]",
					" transition-all  duration-300 h-full"
				)}
			>
				<ChatPanel />
			</div>
		</div>
	);
}
