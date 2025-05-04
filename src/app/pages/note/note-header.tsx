import { GradientBadge } from "@/components/ui/gradient-badge";
import { RootState } from "@/redux/store";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import NoteHeaderSkeleton from "./skeletons/note-header-skeleton";
import { useCallback, useEffect, useRef, useState } from "react";
import { setIsSaving } from "@/redux/slice/folder-note";
import { useAutoSave } from "@/hooks/useAutoSave";
import { useUpdateNote } from "@/service/notes/update-note";
import { useParams } from "react-router-dom";
import { extractIdFromSlug } from "@/lib/utils";

const TOPIC_DISPLAY_LIMIT = 4;

export default function NoteHeader() {
    const dispatch = useDispatch();
    const { selectedNote } = useSelector((state: RootState) => state.folderNotes);
    const [noteTitle, setNoteTitle] = useState<string|undefined>(undefined);
    const titleRef = useRef<HTMLTextAreaElement>(null);
    const [showAllTopics, setShowAllTopics] = useState(false);
    const {noteId} = useParams();
    const id = extractIdFromSlug(noteId!);
    const hasMounted = useRef(false);
    const {mutate} = useUpdateNote();
    
    // todo delegate action callback if id exists
    const handleSave = useCallback((latestNoteTitle: string | undefined) => {
        if (!latestNoteTitle || (latestNoteTitle === selectedNote?.title)) return;
        if(!id) return;
        dispatch(setIsSaving(true));
        console.log("saving title...");
        mutate({
            noteId: selectedNote!.id,
            title: noteTitle
          }, {
            onSuccess: () => {
              console.log("saved title...");
            },
            onSettled : () => {
                dispatch(setIsSaving(false));
            }
          })
    }, [dispatch, id, mutate, noteTitle, selectedNote]);


    // Sync title state    
    useEffect(() => {
        if (selectedNote && !hasMounted.current) {
          setNoteTitle(selectedNote.title || "untitled");
          hasMounted.current = true;
        }
    }, [selectedNote]);
      

    useAutoSave(noteTitle, handleSave, 1000, hasMounted.current);
    

    useEffect(() => {
        const textarea = document.getElementById("note-title-textarea");
        if (textarea) {
          textarea.style.height = "auto";
          textarea.style.height = `${textarea.scrollHeight}px`;
        }
      }, [noteTitle]);
    
    return (
    <div className="mb-6 px-4">
        {!selectedNote && id ? (
            <NoteHeaderSkeleton />
        ) : (
            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
            >
                <textarea
                    ref={titleRef}
                    value={noteTitle}
                    onChange={(e) => setNoteTitle(e.target.value)}
                    placeholder={id? "" : "Untitled Note"}
                    className="w-full resize-none text-4xl font-extrabold text-foreground bg-transparent outline-none border-none focus:ring-0 leading-tight"
                    rows={1}
                    id="note-title-textarea"
                />
            </motion.div>
        )}

        {selectedNote?.summary && (
            <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="flex flex-col gap-3 mt-3 bg-gradient-to-b from-white to-[#ECE4FF] py-4 px-4 rounded-3xl text-gray-900"
            >
            <div className="flex flex-wrap gap-2">
                {selectedNote.keywords.map((topic, index) => (
                <GradientBadge key={index} label={topic} />
                ))}
            </div>

            <div className="mt-4">
                <h1 className="text-primary-hard text-2xl font-medium">Summary</h1>
                <p className="text-sm">{selectedNote.summary}</p>

                <motion.div
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap gap-2"
                >
                <AnimatePresence initial={false}>
                    {(showAllTopics ? selectedNote.topics : selectedNote.topics.slice(0, TOPIC_DISPLAY_LIMIT)).map(
                    (topic, index) => (
                        <motion.span
                        key={index}
                        layout
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.1 * (index / 5.0) }}
                        className="text-muted-foreground px-3 py-0.5 my-0.5 rounded-full text-xs font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                        {topic}
                        </motion.span>
                    )
                    )}
                </AnimatePresence>
                </motion.div>

                {selectedNote.topics.length > TOPIC_DISPLAY_LIMIT && (
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowAllTopics(!showAllTopics)}
                    className="text-primary underline text-xs font-medium mt-1"
                >
                    {showAllTopics ? "See less" : "See more"}
                </motion.button>
                )}
            </div>
            </motion.div>
        )}

        </div>
    )
}
