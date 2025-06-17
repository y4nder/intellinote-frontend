import { Note } from "@/types/note";
import { GradientBadge } from "../ui/gradient-badge";
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFolder, setSelectedNote } from "@/redux/slice/folder-note";
import NoteCardDropDown from "./note-card-dropdown";
import { cn, getDisplayTime } from "@/lib/utils";

interface NoteCardProps {
	note: Note;
}

export default function NoteCard({ note }: NoteCardProps) {
	const { folders } = useSelector((state: RootState) => state.folderNotes);
	const { isNoteGrid } = useSelector((state: RootState) => state.preference);
	const { title, summary, createdAt, keywords } = note;
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const handleNavigation = () => {
		if (note.isDeleted) return;
		dispatch(setSelectedNote(note));
		const noteId = `${note.title.toLowerCase().replace(/\s+/g, "-")}-${note.id}`;
		navigate(`/Note/${noteId}`);
	};

	const handleFolderNavigation = () => {
		if (note.isDeleted) return;
		if (!note.folder) return;
		const folder = folders.find((f) => f.id === note.folder?.id);
		dispatch(setSelectedFolder(folder!));
		const folderId = `${note.folder.name.toLowerCase().replace(/\s+/g, "-")}-${note.folder.id}`;
		navigate(`/Folder/${folderId}`);
	};

	// Keywords logic
	const displayedKeywords = keywords?.slice(0, 2) || [];
	const remainingCount = keywords && keywords.length > 2 ? keywords.length - 3 : 0;

	return (
		<div
			className={cn(
				"bg-background dark:bg-surface-container-low rounded-3xl md:max-w-sm lg:max-w-sm shadow-sm hover:shadow-md cursor-pointer group active:scale-98 transition-transform",
				``
			)}
			onClick={handleNavigation}
		>
			<div className="bg-primary-fixed dark:bg-secondary-container h-[40px] rounded-t-3xl " />
			<div className={cn("p-5 flex flex-col justify-between")}>
				<div className="mb-3 flex justify-between items-start">
					<div className={cn("space-y-1.5")}>
						<h3 className="font-medium text-on-primary-container group-hover:text-primary transition-colors">{title}</h3>
						{note.folder && (
							<div
								onClick={(e) => {
									e.stopPropagation();
									handleFolderNavigation();
								}}
								className="hover:underline text-secondary"
							>
								<p className="text-xs">{note.folder?.name}</p>
							</div>
						)}
					</div>
					<NoteCardDropDown note={note} />
				</div>
				{summary && isNoteGrid && <p className="text-secondary text-xs mb-4 line-clamp-3">{summary}</p>}
				<div className="flex items-center justify-between">
					{isNoteGrid && (
						<div className="flex flex-wrap gap-2 max-w-64">
							{displayedKeywords.map((tag, index) => (
								<GradientBadge
									key={index}
									label={tag}
								/>
							))}
							{remainingCount > 0 && <GradientBadge label={`+${remainingCount} more`} />}
						</div>
					)}
					<span className="text-gray-400 text-xs">{getDisplayTime(createdAt)}</span>
				</div>
			</div>
		</div>
	);
}
