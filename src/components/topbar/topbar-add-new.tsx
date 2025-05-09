import { FolderIcon, NotebookIcon, PlusCircle } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useCreateNote } from "@/service/notes/create-note";
import { useQueryClient } from "@tanstack/react-query";
import { addNote, setSelectedFolder, setSelectedNote } from "@/redux/slice/folder-note";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { useCreateFolder } from "@/service/folders/create-folder";
import { useState } from "react";
import { SparklesText } from "../magicui/sparkles-text";
import { Button } from "../ui/button";


export default function TopBarAddNew() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { mutate: newNoteMutation } = useCreateNote();
    const { mutate: newFolderMutation, isPending: isCreatingFolder } = useCreateFolder();
    const [folderName, setFolderName] = useState("");
    

    const queryClient = useQueryClient();

    const isValid = folderName.trim().length > 0;

    const handleCreateNote = () => {
        newNoteMutation({
            title: "",
            content: ""
        }, {
            onSuccess : (note) => {
                dispatch(setSelectedNote(note));
                dispatch(addNote(note));
                queryClient.invalidateQueries({queryKey: ["user-notes"]});
                const noteId = `${note.title.toLowerCase().replace(/\s+/g, "-")}-${note.id}`;
                navigate(`/Note/${noteId}`);
            }
        })
    };

    const handleCreateFolder = () => {
        newFolderMutation({
            name: folderName,
            description: "",
            noteIds: [],
            auto: false
        }, {
            onSuccess : (data) => {
                const {folder} = data;
                dispatch(setSelectedFolder(folder));
                queryClient.invalidateQueries({queryKey: ["user-folders"]});
                const folderId = `${folder.name.toLowerCase().replace(/\s+/g, "-")}-${folder.id}`;
                navigate(`/Folder/${folderId}`);
            }
        })
    }



    return (
        <>
            <Dialog>
                <DropdownMenu>
                    <DropdownMenuTrigger
                        className="flex gap-3 items-center transition-all duration-300 text-sm w-fit rounded-3xl ml-4 bg-primary-container hover:bg-primary/90 hover:text-white text-on-surface-variant px-6 h-12"
                    >                    
                        <PlusCircle width={20}/>
                        <span className="">New</span>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem 
                            onClick={handleCreateNote}
                        >
                            <NotebookIcon/>
                            Create new note
                        </DropdownMenuItem>
                        <DialogTrigger className="w-full">
                            <DropdownMenuItem>
                                <FolderIcon/>
                                Create new folder
                            </DropdownMenuItem>
                        </DialogTrigger>
                    </DropdownMenuContent>
                </DropdownMenu>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>New Folder</DialogTitle>
                        <DialogDescription>
                            <Input className="mt-4 border-primary" 
                                placeholder="Folder Name"
                                value={folderName}
                                onChange={(e) => setFolderName(e.target.value)}
                            />
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose>
                            <Button                             
                                className="text-xs rounded-2xl bg-primary-hard/50 hover:bg-primary-hard/80 text-white"
                                onClick={handleCreateFolder}
                                disabled={!isValid || isCreatingFolder}>
                                {isCreatingFolder ? (
                                <div className="flex items-center gap-2">
                                    <SparklesText sparklesCount={4} className="text-sm text-primary-hard">
                                        <p className="font-medium">
                                            Creating Folder
                                        </p>
                                    </SparklesText>
                                    <div className="flex items-center space-x-1 mt-2">
                                        <span className="w-2 h-2 bg-primary-hard rounded-full animate-bounce [animation-delay:.1s]" />
                                        <span className="w-2 h-2 bg-primary-hard rounded-full animate-bounce [animation-delay:.2s]" />
                                        <span className="w-2 h-2 bg-primary-hard rounded-full animate-bounce [animation-delay:.3s]" />
                                    </div>
                                </div>
                                ) : (
                                    <>Create Folder</>
                                )}
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
