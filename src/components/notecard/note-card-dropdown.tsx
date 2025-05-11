import { LucideFolderArchive, MoreHorizontal, PlusIcon, Trash2Icon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { Note } from "@/types/note";
import { Dialog } from "../ui/dialog";
import ConfirmDeleteModal from "../modals/confirm-delete-note";
import { DialogTrigger } from "@radix-ui/react-dialog";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNoteToFolder, removeNote, removeNoteFromFolder } from "@/redux/slice/folder-note";
import RemoveFromFolderModal from "../modals/remove-from-folder";
import AddToFolderModal from "@/components/modals/folder-add-note-item";
import { Folder } from "@/types/folder";
import { useUpdateFolderAction } from "@/service/folders/add-notes-to-folder";
import { useQueryClient } from "@tanstack/react-query";

type NoteCarDropDownProps = {
    note: Note  
}

type ModalTypes = "add to folder" | "remove from folder" | "delete note" | null;

export default function NoteCardDropDown({note} : NoteCarDropDownProps) {
    const dispatch = useDispatch();
    const { mutate: updateFolder } = useUpdateFolderAction();
    const queryClient = useQueryClient();

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation(); 
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState<ModalTypes>(null);

    const handleChangeModalType = (type: ModalTypes) => {
        setModalType(type);
    }

    const handleCancel = () => {
        setModalType(null);
    }


    const handleConfirmDelete = () => {
        dispatch(removeNote(note));
        setIsModalOpen(false);
        //todo add persistence
    }

    const handleConfirmRemoveFromFolder = () => {
        if(note.folder === null) return;
        updateFolder({
            folderId: note.folder!.id,
            noteIds: [note.id],
            actionType: "delete"
        }, {
            onSuccess : () => {
                dispatch(removeNoteFromFolder(note));
                setIsModalOpen(false);
                queryClient.invalidateQueries({
                    queryKey: ["user-notes"]
                });
            }
        })
    }

    const handleConfirmAddToFolder = (folder: Folder) => {
        updateFolder({
            folderId: folder.id,
            noteIds: [note.id],
            actionType: "add"
        }, {
            onSuccess : () => {
                dispatch(addNoteToFolder({
                    note: note,
                    folder: folder
                }));
                setIsModalOpen(false);
                queryClient.invalidateQueries({
                    queryKey: ["user-notes"]
                });
            }
        });
    }


    return (
        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <div className="text-on-background p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal className="h-5 w-5" />
                    </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-fit px-2" onClick={handleClick}>
                    <DropdownMenuSeparator />
                    <DropdownMenuGroup className="flex flex-col text-on-background">
                        <DialogTrigger>
                            <DropdownMenuItem disabled={note.folder !== null}
                                onClick={() => handleChangeModalType("add to folder")}
                            >
                                <PlusIcon/>
                                Add to Folder
                            </DropdownMenuItem>
                        </DialogTrigger>
                        <DialogTrigger>
                            <DropdownMenuItem disabled={note.folder === null}
                                onClick={() => handleChangeModalType("remove from folder")}
                            >
                                <LucideFolderArchive/>
                                Remove from Folder
                            </DropdownMenuItem>
                        </DialogTrigger>
                        <DialogTrigger>
                            <DropdownMenuItem className="text-red-500"
                                onClick={() => handleChangeModalType("delete note")}
                            >
                                <Trash2Icon/>
                                Delete Note
                            </DropdownMenuItem>
                        </DialogTrigger>
                    </DropdownMenuGroup>
                    <DropdownMenuSeparator />
                </DropdownMenuContent>
            </DropdownMenu>
            {modalType === "delete note" && (
                <ConfirmDeleteModal 
                    note={note}
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancel}
                />
            )}
            {modalType === "remove from folder" && (
                <RemoveFromFolderModal
                    note={note}    
                    onConfirm={handleConfirmRemoveFromFolder}
                    onCancel={handleCancel}
                />
            )}
            {modalType === "add to folder" && (
                <AddToFolderModal
                    note={note}
                    onConfirm={handleConfirmAddToFolder}
                    onCancel={handleCancel}
                />
            )}
        </Dialog>
    )
}
