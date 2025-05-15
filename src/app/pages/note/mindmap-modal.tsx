import MarkmapHooks from "@/components/markmap/markmap-hooks";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { setMindMap } from "@/redux/slice/folder-note";
import { RootState } from "@/redux/store";
import { useCreateMindmap } from "@/service/mindmap/create-mindmap";
import { Loader2, MapIcon } from 'lucide-react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MindMapModal() {
    const { selectedNote } = useSelector((state: RootState) => state.folderNotes);
    const [isOpen, setIsOpen] = useState(false);
    const { mutate : createMindmap, isPending: isLoading } = useCreateMindmap();
    const dispatch = useDispatch();

    const handleOpen = () => {
        setIsOpen(true);
    }

    const handleCreateThenOpen = () => {
        if(!selectedNote) return;

        createMindmap({
            noteId: selectedNote.id
        }, {
            onSuccess : (data) => {
                dispatch(setMindMap(data));
                console.log("created mind map");
            },
            onSettled : () => {
                setIsOpen(true);
            }
        })
    }

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <Button 
                onClick={() => {
                    if (!selectedNote || isLoading) return;
                    if (selectedNote.mindmap) {
                        console.log("there is mind map");
                        handleOpen();
                    } else {
                        console.log("no mind map");
                        handleCreateThenOpen();
                    }
                }}
                disabled={isLoading}
                className="text-xs rounded-2xl bg-red-400 hover:bg-red-600 font-bold cursor-pointer flex gap-2 items-center px-4"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="animate-spin w-4 h-4" />
                        Creating...
                    </>
                ) : (
                    <>
                        <MapIcon />
                        {selectedNote?.mindmap ? "View Mind Map" : "Create Mind Map"}
                    </>
                )}
            </Button>
            <DialogContent className="backdrop-blur-2xl min-w-[90vw] min-h-[90vh]">
                <DialogHeader className="">
                    <DialogTitle className="text-on-surface text-3xl">
                        Mind Map: {selectedNote?.title}
                    </DialogTitle>
                    <DialogDescription className="text-on-surface text-sm">
                    {/* <div className="space-y-4">
                        {selectedNote?.summary && (
                            <p className="italic text-xs">"{selectedNote.summary}"</p>
                        )}  
                    </div>  */}
                    </DialogDescription>
                </DialogHeader>

                <div className="">
                    {selectedNote?.mindmap ? (
                    <MarkmapHooks note={selectedNote} />
                    ) : (
                    <p>Loading mind map...</p>
                    )}
                </div>
            </DialogContent>
        </Dialog>
    )
}
