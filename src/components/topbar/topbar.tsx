import { Search, SidebarOpenIcon } from "lucide-react";

import { useIsMobile } from "@/hooks/use-is-mobile";
import TopBarAddNew from "./topbar-add-new";
import { useState } from "react";
import { SearchModal } from "../search/search-modal";
import { KeyboardShortcut } from "../search/keyboard-shortcut";
import { ModeToggle } from "../ui/mode-toggle";
import { cn } from "@/lib/utils";
import { NoteGeneratorDialog } from "../ui/note-generator-dialog";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { MultiStepLoader } from "../ui/multi-step-loader";
import { useWebSocket } from "@/providers/socket/socket-context";
import { useSidebar } from "@/providers/sidebar/sidebar-context";

const loadingStates = [
	{ text: "🧠 Summoning your thoughts..." },
	{ text: "📚 Gathering your inspirations..." },
	{ text: "✍️ Drafting your masterpiece..." },
	{ text: "🧩 Organizing ideas into structure..." },
	{ text: "🎨 Adding finishing touches..." },
	{ text: "💾 Saving your note to the vault..." },
	{ text: "🚀 Launching your note into the cloud..." },
];

export default function TopBar() {
	const { isGeneratingNote } = useSelector((state: RootState) => state.folderNotes);
	const isMobile = useIsMobile();
	const [searchOpen, setSearchOpen] = useState(false);
	const { isCollapsed, toggleSidebar } = useSidebar();
	const { isConnected } = useWebSocket();

	return (
		<>
			<KeyboardShortcut
				keys={["meta", "j"]}
				callback={() => setSearchOpen(true)}
			/>
			<MultiStepLoader
				loadingStates={loadingStates}
				loading={isGeneratingNote}
				duration={2000}
				loop={false}
			/>
			<div className="sticky top-0 z-40 flex items-center justify-between px-4 py-2  backdrop-blur-md">
				{isCollapsed ? (
					<div
						className="rounded-full p-2 hover:bg-primary-container hover:text-on-primary-container"
						onClick={toggleSidebar}
					>
						<SidebarOpenIcon className="h-4 w-4 text-secondary" />
					</div>
				) : (
					<div className="flex" />
				)}
				{!isMobile ? (
					<>
						<div className="flex justify-center items-center">
							<button
								onClick={() => setSearchOpen(true)}
								className="flex items-center min-w-[400px] gap-2 rounded-3xl bg-surface-container-highest dark:bg-surface-container px-4 py-2 text-sm text-muted-foreground dark:border-white/20 dark:bg-brand h-fit hover:shadow-md transition-all duration-300 shadow-sm cursor-pointer"
							>
								<Search className="w-4 text-secondary" />
								<span className="text-secondary/50  sm:text-sm font-medium">
									Search <span className="hidden xl:inline-block">Notes</span>
								</span>
							</button>
							<div className="flex items-center gap-2">
								<TopBarAddNew />
								<NoteGeneratorDialog />
							</div>
						</div>
						<div className="flex items-center gap-2">
							<ModeToggle />
							<div className={cn("rounded-full p-1 max-h-[1px]", `${isConnected ? "bg-green-500" : "bg-red-500"}`)} />
						</div>
					</>
				) : (
					<div className="flex flex-row">
						<button
							onClick={() => setSearchOpen(true)}
							className="flex items-center w-fit gap-2 rounded-3xl bg-white px-4 py-2 text-sm text-muted-foreground dark:border-white/20 dark:bg-brand h-12 hover:shadow-md transition-all duration-300 shadow-sm cursor-pointer"
						>
							<Search className="h-4 w-4 text-secondary" />
							<span className="text-secondary/50  sm:text-sm font-medium">
								Search <span className="hidden xl:inline-block">Notes</span>
							</span>
						</button>
						<TopBarAddNew />
					</div>
				)}
			</div>

			<SearchModal
				open={searchOpen}
				onOpenChange={setSearchOpen}
			/>
		</>
	);
}
