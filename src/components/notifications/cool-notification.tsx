import { BotMessageSquare } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ToastContentProps } from "react-toastify";

type CustomNotificationProps = Partial<ToastContentProps> & {
	type: "Note" | "Folder";
	title: string;
	content: string;
	name: string;
	id: string;
};

export default function CoolNotification({ closeToast, title, content, name, id, type }: CustomNotificationProps) {
	const navigate = useNavigate();

	const handleNavigation = () => {
		const titleSlug = name.toLowerCase().replace(/\s+/g, "-");
		navigate(`/${type}/${titleSlug}-${id}`);
		if (closeToast) {
			closeToast();
		}
	};

	return (
		<div className="flex flex-col w-full bg-surface">
			<h3 className="text-on-surface text-sm font-semibold flex items-center gap-1">
				<div className="rounded-full bg-primary-container text-on-surface-variant p-3 group-hover:bg-primary/90 transition-all duration-300">
					<BotMessageSquare className="text-primary-hard dark:text-on-primary-container group-hover:text-white" />
				</div>
				{title}
			</h3>

			<div className="pl-5 mt-2">
				<p className="text-sm">{content}</p>

				<div className="flex items-center gap-2">
					<button
						onClick={handleNavigation}
						className="transition-all border-none text-sm font-semibold bg-transparent border rounded-md py-2 text-indigo-600 active:scale-[.95] "
					>
						View
					</button>
					<button
						onClick={closeToast}
						className="transition-all border-none text-sm bg-transparent border  font-semibold rounded-md py-2 text-grey-400 active:scale-[.95] "
					>
						Dismiss
					</button>
				</div>
			</div>
		</div>
	);
}
