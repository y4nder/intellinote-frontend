import type { Note } from "@/types/note";
import { Checkbox } from "@/components/ui/checkbox";
import { NotebookIcon } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

type NoteItemProps = {
	note: Note;
	isSelected: boolean;
	onToggleSelect: (noteId: string) => void;
};

export default function NoteItem({ note, isSelected, onToggleSelect }: NoteItemProps) {
	const formattedDate = note.updatedAt ? formatDistanceToNow(new Date(note.updatedAt), { addSuffix: true }) : "Unknown date";

	return (
		<div className="flex items-center px-4 py-2 hover:bg-muted/50 rounded-md transition-colors group">
			<div className="flex items-center gap-3 flex-1">
				<Checkbox
					checked={isSelected}
					onCheckedChange={() => onToggleSelect(note.id)}
					className="mr-2"
				/>
				<NotebookIcon className="h-4 w-4 text-rose-500/50" />
				<span className="font-medium text-sm truncate max-w-[300px]">{note.title}</span>
			</div>

			<div className="flex items-center gap-4 text-sm text-muted-foreground">
				<div className="w-32 text-center">me</div>
				<div className="w-48">{formattedDate}</div>
			</div>
		</div>
	);
}
