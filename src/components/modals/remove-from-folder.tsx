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
        <DialogContent onClick={handleClick} className="bg-surface">
            <DialogHeader>
                <DialogTitle className="text-on-surface">Remove {note.title} from {note.folder?.name} ?</DialogTitle>
                <DialogDescription className="text-secondary">
                    Are you sure you want to remove this note from its folder?
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button 
                    className="hover:bg-surface-container text-on-surface bg-surface-dim cursor-pointer"
                    onClick={onCancel}
                >
                    Cancel
                </Button>
                <Button 
                    className="bg-error dark:bg-error-container/20 text-on-error-container px-4 hover:bg-error-container cursor-pointer"
                    onClick={onConfirm}>
                    <Trash2Icon/>
                    Remove
                </Button>
            </DialogFooter>
        </DialogContent>
    )
}
