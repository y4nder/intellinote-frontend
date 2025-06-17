import { PropsWithChildren } from "react";

const AuthLayout = ({ children }: PropsWithChildren) => {
	return (
		<div className="bg-muted h-screen">
			<main className="h-full">{children}</main>
		</div>
	);
};

export default AuthLayout;
