import AddToFolderModal from "@/components/modals/folder-add-note-item";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { addNoteToFolder } from "@/redux/slice/folder-note";
import { RootState } from "@/redux/store";
import { useUpdateFolderAction } from "@/service/folders/add-notes-to-folder";
import { Folder } from "@/types/folder";
import { FolderIcon } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";


export default function NoteHeaderUpdateFolderButton() {
    const { selectedNote } = useSelector((state: RootState) => state.folderNotes);
    const dispatch = useDispatch();
    const { mutate: updateFolder } = useUpdateFolderAction();
    const [isOpen, setIsOpen] = useState(false);

    const handleConfirmAddToFolder = (folder: Folder) => {
        if(!selectedNote) return;
        updateFolder({
            folderId: folder.id,
            noteIds: [selectedNote.id],
            actionType: "add"
        }, {
            onSuccess : (data) => {
                dispatch(addNoteToFolder({
                    note: data.notes[0],
                    folder: folder
                }));
                setIsOpen(false);
            }
        });
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger 
                className="text-[12px] rounded-2xl bg-secondary hover:bg-primary-fixed-dim duration-300 text-on-secondary  cursor-pointer flex py-2 px-4 items-center gap-2"
            >
                <FolderIcon width={18}/>
                Add To Folder
            </DialogTrigger>
            <AddToFolderModal
                note={selectedNote!}
                onConfirm={handleConfirmAddToFolder}
                onCancel={() => setIsOpen(false)}
            />
        </Dialog>
    )
}
