import { Outlet } from "react-router-dom";
import AuthLayout from "@/app/pages/auth/layout";

const AuthRoot = () => {
	return (
		<AuthLayout>
			<Outlet />
		</AuthLayout>
	);
};

export default AuthRoot;
