import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { addNotesToFolder, setNotes } from "@/redux/slice/folder-note";
import type { RootState } from "@/redux/store";
import { useGetUserNotes } from "@/service/notes/get-user-notes";
import type { Note } from "@/types/note";
import { Plus, NotebookIcon, ArrowUpDown, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Checkbox } from "@/components/ui/checkbox";
import { useUpdateFolderAction } from "@/service/folders/add-notes-to-folder";
import { useQueryClient } from "@tanstack/react-query";
import NoteItem from "./folder-add-note-item";

export default function AddNotesDialog() {
	const { selectedFolder, notes } = useSelector((state: RootState) => state.folderNotes);
	const [selectedNoteIds, setSelectedNoteIds] = useState<string[]>([]);
	const [isDialogOpen, setIsDialogOpen] = useState(false);
	const { mutate, isPending } = useUpdateFolderAction();
	const client = useQueryClient();

	const { data } = useGetUserNotes({ skip: 0, take: 100 });

	const dispatch = useDispatch();

	useEffect(() => {
		if (data) {
			dispatch(setNotes(data.notes));
		}
	}, [data, dispatch]);

	const notesWithoutFolders = notes.filter((f) => f.folder === null);

	const handleToggleSelect = (noteId: string) => {
		setSelectedNoteIds((prev) => (prev.includes(noteId) ? prev.filter((id) => id !== noteId) : [...prev, noteId]));
	};

	const handleSelectAll = () => {
		if (selectedNoteIds.length === notesWithoutFolders.length) {
			// If all are selected, deselect all
			setSelectedNoteIds([]);
		} else {
			// Otherwise, select all
			setSelectedNoteIds(notesWithoutFolders.map((note) => note.id));
		}
	};

	const handleSubmit = () => {
		// Placeholder for submission handler
		console.log("Selected note IDs:", selectedNoteIds);

		mutate(
			{
				folderId: selectedFolder?.id!,
				noteIds: selectedNoteIds,
				actionType: "add",
			},
			{
				onSuccess: (data) => {
					console.log(data.message);
					client.invalidateQueries({
						queryKey: ["user-folders", data.folderId],
					});
					dispatch(addNotesToFolder(data.notes));
				},
			}
		);

		// Close the dialog after submission
		setIsDialogOpen(false);

		// Clear selections
		setSelectedNoteIds([]);
	};

	return (
		<>
			<Dialog
				open={isDialogOpen}
				onOpenChange={setIsDialogOpen}
			>
				<DialogTrigger
					className="flex items-center px-3 py-1 gap-1 text-xs rounded-2xl bg-primary-hard/50 hover:bg-primary-hard/80 font-bold hover:-translate-y-0.5 transition-transform cursor-pointer"
					onClick={() => setIsDialogOpen(true)}
				>
					<Plus width={16} />
					<NotebookIcon width={16} />
					Add Notes
				</DialogTrigger>
				<DialogContent className="min-w-[800px] max-w-[1000px] bg-surface-container text-on-primary-container">
					<DialogHeader>
						<DialogTitle className="text-lg">Add notes to {selectedFolder?.name}</DialogTitle>
						<DialogDescription className="text-sm">Select notes to be added to the folder</DialogDescription>
					</DialogHeader>

					<div className="mt-4">
						{/* Table Header */}
						<div className="flex items-center px-4 py-2 border-b border-surface-container text-sm font-medium text-muted-foreground">
							<div className="flex items-center gap-3 flex-1">
								<Checkbox
									onCheckedChange={handleSelectAll}
									className="mr-2"
								/>
								<Button
									variant="ghost"
									size="sm"
									className="h-6 px-1"
									onClick={handleSelectAll}
								>
									<span>Name</span>
									<ArrowUpDown className="ml-2 h-3 w-3" />
								</Button>
							</div>

							<div className="flex items-center gap-4">
								<div className="w-32 text-center">Owner</div>
								<div className="w-48 flex items-center">
									<span>Last modified</span>
									<ArrowUpDown className="ml-2 h-3 w-3" />
								</div>
							</div>
						</div>

						{/* Notes List */}
						<div className="max-h-[400px] overflow-y-auto">
							{notesWithoutFolders.length > 0 ? (
								notesWithoutFolders.map((note: Note) => (
									<NoteItem
										key={note.id}
										note={note}
										isSelected={selectedNoteIds.includes(note.id)}
										onToggleSelect={handleToggleSelect}
									/>
								))
							) : (
								<div className="py-8 text-center text-muted-foreground">No notes available to add</div>
							)}
						</div>
					</div>

					<DialogFooter className="mt-4 flex items-center justify-between">
						<div className="text-sm text-muted-foreground">
							{selectedNoteIds.length} {selectedNoteIds.length === 1 ? "item" : "items"} selected
						</div>
						<div className="flex gap-2">
							<Button
								className="border-none bg-surface-container text-on-surface hover:text-on-surface hover:bg-surface cursor-pointer"
								onClick={() => setIsDialogOpen(false)}
							>
								Cancel
							</Button>
							<Button
								className="text-white text-xs rounded-2xl bg-primary-hard/50 hover:bg-primary-hard/80 font-bold"
								onClick={handleSubmit}
								disabled={selectedNoteIds.length === 0 || isPending}
							>
								{isPending ? (
									<>
										<Loader2 className="animate-spin" />
										Adding
									</>
								) : (
									<>Add to folder</>
								)}
							</Button>
						</div>
					</DialogFooter>
				</DialogContent>
			</Dialog>
		</>
	);
}
