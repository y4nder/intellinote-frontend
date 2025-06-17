import type { ReactNode } from "react";
import { LogOut, User } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { NavLink, useNavigate } from "react-router-dom";
import { useLogOut } from "@/service/auth/log-out-user";
import { useDispatch } from "react-redux";
import { logoutUser } from "@/redux/slice/auth";

interface SettingsLayoutProps {
	children: ReactNode;
}

export function SettingsLayout({ children }: SettingsLayoutProps) {
	const { mutate: logOutMutation } = useLogOut();
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogout = () => {
		logOutMutation(void {}, {
			onSuccess: () => {
				dispatch(logoutUser());
				console.log("redirecting to auth login");
				navigate("/auth/login");
			},
		});
	};

	return (
		<div className="flex flex-col md:flex-row">
			{/* Sidebar */}
			<div className="w-full md:w-64 border-r border-primary-container/20 mb-8 pr-2">
				<div className=" space-y-4">
					<nav className="space-y-1">
						<NavLink
							to={""}
							className={({ isActive }) =>
								cn(
									"flex text-sm font-semibold items-center rounded-lg p-2 transition-colors",
									isActive ? "text-primary bg-primary/10" : "text-on-primary-container hover:bg-primary/10"
								)
							}
						>
							<User className="mr-2 h-4 w-4" />
							Account
						</NavLink>
						<Button
							variant="ghost"
							className="w-full justify-start pl-2 text-secondary  hover:bg-red-400 cursor-pointer"
							onClick={handleLogout}
						>
							<LogOut className="mr-0 h-4 w-4" />
							Log Out
						</Button>
					</nav>
				</div>
			</div>

			{/* Main content */}
			<div className="flex-1 overflow-auto">
				<div className="py-6 max-h-[75vh] px-4 md:px-6 ">{children}</div>
			</div>
		</div>
	);
}
