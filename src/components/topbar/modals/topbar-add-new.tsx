import { FolderIcon, NotebookIcon, PlusCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../../ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateNote } from "@/service/notes/create-note";
import { useQueryClient } from "@tanstack/react-query";
import { addNote, setSelectedFolder, setSelectedNote } from "@/redux/slice/folder-note";

import { useCreateFolder } from "@/service/folders/create-folder";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { SparklesText } from "@/components/magicui/sparkles-text";
import { Button } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";

export default function TopBarAddNew() {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { mutate: newNoteMutation } = useCreateNote();
	const { mutate: newFolderMutation, isPending: isCreatingFolder } = useCreateFolder();
	const [folderName, setFolderName] = useState("");
	const isMobile = useIsMobile();

	const queryClient = useQueryClient();

	const isValid = folderName.trim().length > 0;

	const handleCreateNote = () => {
		newNoteMutation(
			{
				title: "",
				content: "",
			},
			{
				onSuccess: (note) => {
					dispatch(setSelectedNote(note));
					dispatch(addNote(note));
					queryClient.invalidateQueries({ queryKey: ["user-notes"] });
					const noteId = `${note.title.toLowerCase().replace(/\s+/g, "-")}-${note.id}`;
					navigate(`/Note/${noteId}`);
				},
			}
		);
	};

	const handleCreateFolder = () => {
		newFolderMutation(
			{
				name: folderName,
				description: "",
				noteIds: [],
				auto: false,
			},
			{
				onSuccess: (data) => {
					const { folder } = data;
					dispatch(setSelectedFolder(folder));
					queryClient.invalidateQueries({ queryKey: ["user-folders"] });
					const folderId = `${folder.name.toLowerCase().replace(/\s+/g, "-")}-${folder.id}`;
					navigate(`/Folder/${folderId}`);
				},
			}
		);
	};

	return (
		<>
			<Dialog>
				<DropdownMenu>
					<DropdownMenuTrigger
						className={cn(
							"flex gap-3 items-center transition-all duration-300 text-sm w-fit  py-2 rounded-3xl ml-4 bg-primary-container hover:bg-primary/90 hover:text-white text-on-surface-variant px-3 cursor-pointer",
							`${isMobile ? "p-2 py-1.5 h-fit" : ""}`
						)}
					>
						<PlusCircle width={20} />
						{!isMobile && <span className="">New</span>}
					</DropdownMenuTrigger>
					<DropdownMenuContent>
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={handleCreateNote}
							className="text-on-surface-variant"
						>
							<NotebookIcon />
							Create new note
						</DropdownMenuItem>
						<DialogTrigger className="w-full text-on-surface-variant">
							<DropdownMenuItem>
								<FolderIcon />
								Create new folder
							</DropdownMenuItem>
						</DialogTrigger>
					</DropdownMenuContent>
				</DropdownMenu>
				<DialogContent className="bg-surface">
					<DialogHeader>
						<DialogTitle className="text-on-surface">New Folder</DialogTitle>
						<DialogDescription>
							<Input
								className="mt-4 border-primary bg-surface-container-high text-on-secondary-container"
								placeholder="Folder Name"
								value={folderName}
								onChange={(e) => setFolderName(e.target.value)}
							/>
						</DialogDescription>
					</DialogHeader>
					<DialogFooter>
						<DialogClose>
							<Button
								className="text-xs rounded-2xl bg-primary-hard/50 hover:bg-primary-hard/80 text-on-secondary dark:bg-secondary"
								onClick={handleCreateFolder}
								disabled={!isValid || isCreatingFolder}
							>
								{isCreatingFolder ? (
									<div className="flex items-center gap-2">
										<SparklesText
											sparklesCount={4}
											className="text-sm text-primary-hard"
										>
											<p className="font-medium">Creating Folder</p>
										</SparklesText>
										<div className="flex items-center space-x-1 mt-2">
											<span className="w-2 h-2 bg-primary-hard rounded-full animate-bounce [animation-delay:.1s]" />
											<span className="w-2 h-2 bg-primary-hard rounded-full animate-bounce [animation-delay:.2s]" />
											<span className="w-2 h-2 bg-primary-hard rounded-full animate-bounce [animation-delay:.3s]" />
										</div>
									</div>
								) : (
									<>Create Folder</>
								)}
							</Button>
						</DialogClose>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
