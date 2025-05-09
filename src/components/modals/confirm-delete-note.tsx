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
        <DialogContent onClick={handleClick}>
            <DialogHeader>
                <DialogTitle>Delete {note.title} ?</DialogTitle>
                <DialogDescription>
                    This action cannot be undone. Are you sure you want to permanently
                    delete this file from our servers?
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
