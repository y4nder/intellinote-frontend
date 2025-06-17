import AppLayout from "@/app/pages/(root)/layout";
import { Outlet } from "react-router-dom";

export default function AppRoot() {
	return (
		<AppLayout>
			<Outlet />
		</AppLayout>
	);
}
