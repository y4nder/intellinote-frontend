import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RootState } from "@/redux/store";
import { useAutoAssignNote } from "@/service/notes/auto-assign-note";
import { Folder } from "@/types/folder";
import { SparkleIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNoteToFolder, setFolders } from '@/redux/slice/folder-note';
import { useGetUserFolders } from "@/service/folders/get-user-folders";
import { useUpdateFolderAction } from "@/service/folders/add-notes-to-folder";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


export default function NoteHeaderAutoAssignButton() {
    const { selectedNote, folders } = useSelector((state: RootState) => state.folderNotes);
    const dispatch = useDispatch();
    const [toAssignFolder, setToAssignFolder] = useState<Folder|null>(null);
    const {mutate, isPending} = useAutoAssignNote();
    const {mutate: addToFolderMutation} = useUpdateFolderAction();
    const [isOpen, setIsOpen] = useState(false);

    const {data} = useGetUserFolders();

    useEffect(() => {
        if(data){
            dispatch(setFolders(data.folders));
        }
    },[data])

    const handleAutoAssign = () => {
        //done replace with api call
        mutate(selectedNote?.id!,{
            onSuccess: (data) => {
                const folderToAssign = folders.find(f => f.id == data.scores[0].folderId);
                setToAssignFolder(folderToAssign!);
                setIsOpen(true);
            }
        });
    }


    const handleCancel = () => {
        setIsOpen(false);
    }

    const handleConfirmAutoAssignNote = () => {
        if(!toAssignFolder) return;
        addToFolderMutation({
            folderId: toAssignFolder.id,
            noteIds: [selectedNote!.id],
            actionType: "add"
        }, {
            onSuccess: () => {
                dispatch(addNoteToFolder({
                    note: selectedNote!,
                    folder: toAssignFolder
                }));
                setIsOpen(false);
            }
        })
    }

    return (
        <div>
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <Button
                    disabled={isPending}
                    onClick={handleAutoAssign}
                    className="bg-on-primary-fixed text-xs text-white hover:bg-primary-fixed-dim hover:text-primary rounded-2xl"
                >
                    <SparkleIcon/>
                    Auto Assign
                </Button>
                <DialogContent className="max-w-lg w-full rounded-2xl p-6 bg-white shadow-xl">
                    <DialogHeader>
                        <DialogTitle className="text-lg font-semibold text-gray-900">
                        Auto Assigning
                        </DialogTitle>
                        <DialogDescription className="text-sm text-gray-600">
                        <div>
                            This note will be assigned to folder <span className="font-medium text-gray-800">{toAssignFolder?.name}</span>
                        </div>
                        <Accordion type="single" collapsible className="mt-4">
                            <AccordionItem value="item-1">
                            <AccordionTrigger className="text-sm text-gray-700 hover:text-gray-900">
                                View Summary
                            </AccordionTrigger>
                            <AccordionContent className="text-sm text-gray-600">
                                {toAssignFolder?.description}
                            </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="mt-6 flex justify-end gap-2">
                        <Button
                        variant="outline"
                        onClick={handleCancel}
                        className="rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                        >
                        Cancel
                        </Button>
                        <Button
                        onClick={handleConfirmAutoAssignNote}
                        className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
                        >
                        Confirm
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}
