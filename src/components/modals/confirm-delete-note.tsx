import { Note } from "@/types/note";
import { Button } from "../ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "../ui/dialog";
import { Trash2Icon } from "lucide-react";


type ConfirmDeleteModalProps = {
    note: Note,
    onConfirm: () => void
    onCancel: () => void
}

export default function ConfirmDeleteModal({note, onConfirm, onCancel} : ConfirmDeleteModalProps) {
    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation(); 
    };

    return (
        <DialogContent onClick={handleClick} className="bg-surface">
            <DialogHeader>
                <DialogTitle className="text-on-surface">Delete {note.title} ?</DialogTitle>
                <DialogDescription className="text-on-surface">
                    This Note will be binned, and will be <strong>deleted</strong> forever <strong>in 30 days</strong>
                </DialogDescription>
            </DialogHeader>
            <DialogFooter>
                <Button 
                    className="hover:bg-surface-container text-gray-700 dark:text-on-surface bg-surface-dim cursor-pointer"
                    onClick={onCancel}
                >
                    Cancel
                </Button>
                <Button 
                    className="bg-red-400 text-white px-4 hover:bg-red-500 cursor-pointer"
                    onClick={onConfirm}>
                    <Trash2Icon/>
                    Delete
                </Button>
            </DialogFooter>
        </DialogContent>
    )
}
