import { Note } from "@/types/note";
import { cn, getDisplayTime, getGradientClassesFromString } from "@/lib/utils";
import NoteCardDropDown from "../notecard/note-card-dropdown";
import { NotebookIcon } from "lucide-react";
import { GradientBadge } from "../ui/gradient-badge";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFolder, setSelectedNote } from "@/redux/slice/folder-note";
import { useNavigate } from "react-router-dom";
import { RootState } from "@/redux/store";

type NoteListProps ={
    notes : Note[]
}

export default function NoteList({ notes }: NoteListProps) {
    const {folders} = useSelector((state: RootState) => state.folderNotes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleNavigation = (note: Note) => {
        dispatch(setSelectedNote(note));
        const noteId = `${note.title.toLowerCase().replace(/\s+/g, "-")}-${note.id}`;
        navigate(`/Note/${noteId}`);
    };

    const handleFolderNavigation = (note: Note) => {
        if(!note.folder) return;
        const folder = folders.find(f => f.id === note.folder?.id);
        dispatch(setSelectedFolder(folder!));
        const folderId = `${note.folder.name.toLowerCase().replace(/\s+/g, "-")}-${note.folder.id}`;
        navigate(`/Folder/${folderId}`);
    }

    return (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="text-on-surface">
              <tr className="border-b border-primary-container">
                <th className="text-left py-3 px-4 font-medium text-md text-primary-hard dark:text-primary">Title</th>
                <th className="text-left py-3 px-4 font-medium text-md text-primary-hard dark:text-primary">Folder</th>
                <th className="text-left py-3 px-4 font-medium text-md text-primary-hard dark:text-primary">Keywords</th>
                <th className="text-left py-3 px-4 font-medium text-sm text-primary-hard dark:text-primary">Created</th>
                <th className="text-right py-3 px-4 font-medium text-sm"></th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note) => { 
                const {keywords, folder} = note;

                const displayedKeywords = keywords?.slice(0, 2) || [];
                const remainingCount = keywords && keywords.length > 2 ? keywords.length - 3 : 0;
                const gradientClass = getGradientClassesFromString(folder ? folder.name : "folder");

                return(
                    <tr key={note.id} className="border-b border-primary-container/50 hover:bg-surface-container/30 transition-colors text-on-surface cursor-pointer group"
                        onClick={() => handleNavigation(note)}
                    >
                    <td className="py-4 px-4">
                        <div className="flex items-center gap-2 text-on-surface-variant">
                            <NotebookIcon className="text-primary" width={16}/>
                            <span className="text-sm font-medium">{note.title}</span>
                        </div>
                    </td>
                    <td className="py-4 px-4 text-sm">
                        {note.folder && (
                            <div onClick={(e) => {
                                e.stopPropagation();
                                handleFolderNavigation(note);
                            }}
                            className="flex items-center gap-2 hover:underline"
                            >
                                <div
                                    className={cn(
                                        "mask-[url('/folderIcon.png')] mask-no-repeat mask-center mask-contain",
                                        "w-full max-w-[20px] aspect-[103/75]",
                                        gradientClass.base, gradientClass.hover
                                    )}
                                />
                                <span className="truncate max-w-md text-on-surface/50">
                                    {note.folder.name}
                                </span>
                            </div>
                        )}
                    </td>
                    <td className="py-4 px-4 text-xs">
                        <div className="flex flex-wrap gap-2 ">
                            {displayedKeywords.map((tag, index) => (
                                <GradientBadge key={index} label={tag} />
                            ))}
                                {remainingCount > 0 && (
                                <GradientBadge label={`+${remainingCount} more`} />
                            )}
                        </div>
                    </td>
                    <td className="py-4 px-4 text-xs text-on-surface/50">{getDisplayTime(note.createdAt)}</td>
                    <td className="py-4 px-4 text-right w-fit">
                        <NoteCardDropDown note={note}/>
                    </td>
                    </tr>
                )
            })}
            </tbody>
          </table>
        </div>
      )
}
