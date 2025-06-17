import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/providers/theme/theme-context";

export function ModeToggle() {
	const { setTheme, getTheme } = useTheme();

	const currentTheme = getTheme();
	const isDark = currentTheme === "dark";

	const handleToggleTheme = () => {
		setTheme(isDark ? "light" : "dark");
	};

	return (
		<Button
			variant="ghost"
			size="icon"
			onClick={handleToggleTheme}
			className="relative bg-surface-container-high rounded-full shadow-sm outline-none text-primary-hard dark:text-primary cursor-pointer"
		>
			<Sun className="h-[1.2rem] w-[1.2rem] transition-all duration-300 scale-100 rotate-0 dark:-rotate-90 dark:scale-0" />
			<Moon className="absolute h-[1.2rem] w-[1.2rem] transition-all duration-300 scale-0 rotate-90 dark:rotate-0 dark:scale-100" />
			<span className="sr-only">Toggle theme</span>
		</Button>
	);
}
