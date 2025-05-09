import { Note } from "@/types/note";
import { Button } from "../ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Trash2Icon } from "lucide-react";


type RemoveFromFolderModalProps = {
    note: Note,
    onConfirm: () => void
    onCancel: () => void
}

export default function RemoveFromFolderModal({note, onConfirm, onCancel} : RemoveFromFolderModalProps) {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation(); 
    };

    return (
        <DialogContent onClick={handleClick}>
            <DialogHeader>
                <DialogTitle>Remove {note.title} from {note.folder?.name} ?</DialogTitle>
                <DialogDescription>
                    Are you sure you want to remove this note from its folder?
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button 
                    className="bg-surface-container text-gray-700 hover:bg-surface-dim"
                    onClick={onCancel}
                >
                    Cancel
                </Button>
                <Button 
                    className="bg-red-400 text-white px-4 hover:bg-red-500"
                    onClick={onConfirm}>
                    <Trash2Icon/>
                    Delete
                </Button>
            </DialogFooter>
        </DialogContent>
    )
}
