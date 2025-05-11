import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RootState } from "@/redux/store";
import { PotentialFolder, useAutoAssignNote } from "@/service/notes/auto-assign-note";
import { Folder } from "@/types/folder";
import { FolderOpen, PlusCircle, Sparkle } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFolders, setNoteFolder, setSelectedFolder } from '@/redux/slice/folder-note';
import { useGetUserFolders } from "@/service/folders/get-user-folders";
import { useUpdateFolderAction } from "@/service/folders/add-notes-to-folder";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useCreateFolder } from "@/service/folders/create-folder";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";


export default function NoteHeaderAutoAssignButton() {
    const { selectedNote, folders } = useSelector((state: RootState) => state.folderNotes);
    const dispatch = useDispatch();
    const [toAssignFolder, setToAssignFolder] = useState<Folder|null>(null);
    const [toCreateFolder, setToCreateFolder] = useState<PotentialFolder | null>(null);
    const {mutate, isPending} = useAutoAssignNote();
    const {mutate: addToFolderMutation} = useUpdateFolderAction();
    const [isOpen, setIsOpen] = useState(false);
    
    const { mutate: newFolderMutation } = useCreateFolder();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    const {data} = useGetUserFolders({
        skip: 0,
        take: 100
    });

    useEffect(() => {
        if(data){
            dispatch(setFolders(data.folders));
        }
    },[data])

    const handleAutoAssign = () => {
        //done replace with api call
        mutate(selectedNote?.id!,{
            onSuccess: (data) => {
                const {folder} = data;
                if(folder.folderId){
                    const folderToAssign = folders.find(f => f.id == folder.folderId);
                    console.log("folder to Assign: ", folderToAssign);
                    setToAssignFolder(folderToAssign!);
                    setIsOpen(true);
                } else {
                    console.log("folder to create", folder);
                    setToCreateFolder(folder);
                    setIsOpen(true);
                }
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
                dispatch(setNoteFolder({
                    noteId: selectedNote?.id!,
                    folderId: toAssignFolder.id
                }));
                queryClient.invalidateQueries({queryKey:["user-notes", "user-folders"]})
                console.log("assigning folder")
                setIsOpen(false);
            }
        })
    }

    const [folderNameInput, setFolderNameInput] = useState("");

    useEffect(() => {
        if(toCreateFolder){
            setFolderNameInput(toCreateFolder.suggestedFolderName!);
        }
    }, [toCreateFolder])

    const handleCreateAutoAssignNote = () => {
        if(!toCreateFolder) return;
        newFolderMutation({
            name: folderNameInput,
            description: "",
            noteIds: [selectedNote?.id!],
            auto: false
        }, {
            onSuccess : (data) => {
                queryClient.invalidateQueries({queryKey: ["user-folders"]});
                const {folder} = data;
                dispatch(setSelectedFolder(folder));
                const folderId = `${folder.name.toLowerCase().replace(/\s+/g, "-")}-${folder.id}`;
                navigate(`/Folder/${folderId}`);
            }
        })
    }

    return (
        <div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <Button
              disabled={isPending}
              onClick={handleAutoAssign}
              className="flex items-center gap-1 bg-on-primary-fixed text-xs text-background dark:text-on-background hover:bg-primary-fixed-dim hover:text-on-primary-fixed rounded-2xl px-3 py-2 cursor-pointer"
            >
              <Sparkle className="w-4 h-4" />
              Auto Assign
            </Button>
      
            <DialogContent className="min-w-[820px] w-full rounded-2xl p-6 bg-surface shadow-xl">
              <DialogHeader>
                {toAssignFolder ? (
                  <>
                    <DialogTitle className="text-lg font-semibold text-on-surface flex items-center gap-2">
                      <FolderOpen className="h-5 w-5 text-blue-600" />
                      Auto Assigning to Existing Folder
                    </DialogTitle>
                    <DialogDescription>
                      <div className="flex flex-col gap-4 mt-4">
                        <div>
                          <p className="text-sm text-secondary">
                            This note will be assigned to:
                          </p>
                          <p className="text-base font-medium text-on-background">
                            {toAssignFolder.name}
                          </p>
                        </div>
                        <div>
                          <Accordion type="single" collapsible>
                            <AccordionItem value="description">
                              <AccordionTrigger className="text-sm text-on-surface hover:text-shadow-on-surface-variant">
                                View Folder Summary
                              </AccordionTrigger>
                              <AccordionContent className="text-sm text-secondary">
                                {toAssignFolder.description}
                              </AccordionContent>
                            </AccordionItem>
                          </Accordion>
                        </div>
                      </div>
                    </DialogDescription>
                  </>
                ) : toCreateFolder ? (
                  <>
                    <DialogTitle className="text-lg font-semibold text-on-surface flex items-center gap-2">
                      <PlusCircle className="h-5 w-5 text-green-600 dark:text-green-300" />
                      Create New Folder Suggestion
                    </DialogTitle>
                    <DialogDescription>
                      <div className="grid grid-cols-2 gap-6 mt-4">
                        <div>
                          <p className="text-sm text-secondary mb-4">Folder Name</p>
                          <Input
                            value={folderNameInput ?? ""}
                            onChange={(e) => setFolderNameInput(e.target.value)}
                            placeholder={toCreateFolder.suggestedFolderName!}
                            className="text-sm bg-surface-container text-on-surface"
                          />
                        </div>
                        <div>
                          <p className="text-sm text-on-surface mb-1">Reason</p>
                          <p className="text-sm text-on-surface-variant">
                            {toCreateFolder.reason}
                          </p>
                        </div>
                      </div>
                    </DialogDescription>
                  </>
                ) : null}
              </DialogHeader>
      
              <DialogFooter className="mt-6 flex justify-end gap-2">
                <Button
                  variant="outline"
                  onClick={handleCancel}
                  className="border-none hover:bg-surface-container text-on-surface hover:text-on-surface bg-surface cursor-pointer" 
                >
                  Cancel
                </Button>
                {toAssignFolder ? (
                  <Button
                    onClick={handleConfirmAutoAssignNote}
                    className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white dark:text-on-surface hover:bg-blue-700 cursor-pointer"
                  >
                    Confirm Assignment
                  </Button>
                ) : toCreateFolder ? (
                  <Button
                    onClick={handleCreateAutoAssignNote}
                    className="rounded-md bg-green-600 dark:bg-green-800 px-4 py-2 text-sm font-medium text-on-surface cursor-pointer hover:bg-green-700"
                  >
                    Create Folder & Assign
                  </Button>
                ) : null}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      );
      
}
