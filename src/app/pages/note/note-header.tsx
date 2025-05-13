import { GradientBadge } from "@/components/ui/gradient-badge";
import { RootState } from "@/redux/store";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import NoteHeaderSkeleton from "./skeletons/note-header-skeleton";
import { useCallback, useEffect, useRef, useState } from "react";
import { setIsSaving, setSummarized } from "@/redux/slice/folder-note";
import { useAutoSave } from "@/hooks/useAutoSave";
import { useUpdateNote } from "@/service/notes/update-note";
import { useNavigate, useParams } from "react-router-dom";
import { cn, extractIdFromSlug } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Loader2, PenIcon, NotebookIcon, BotMessageSquareIcon, FolderIcon } from "lucide-react";
import NoteSummaryLoading from "../home/skeletons/note-generating-loader";
import { useSummarizerSocket} from "@/hooks/sockets";
import { useSummarizeNote } from "@/service/notes/summarize-note";
import NoteHeaderUpdateFolderButton from "./note-header-update-folder-button";
import NoteHeaderAutoAssignButton from "./note-header-auto-assign-button";
import { queryClient } from "@/lib/react-query";
import { toggleChat } from "@/redux/slice/chat-agent";

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
    const {mutate: summarize} = useSummarizeNote();
    const navigate = useNavigate();

    // action states
    const [isSummarizing, setIsSummarizing] = useState(false);

    const handleSummarize = () => {
      setIsSummarizing(true);
      summarize(id!)
    }

    // listen for mock sockets
    useSummarizerSocket((notification) => {
        console.log("notif", notification);
        const {response , id: notifId} = notification;
        console.log("ids", notifId, selectedNote!.id);
        if(notifId === selectedNote!.id){
          dispatch(setSummarized(response));
          setIsSummarizing(false);
          queryClient.invalidateQueries({queryKey:["user-notes"]})
        }
    })

    
    // todo delegate action callback if id exists
    const handleSave = useCallback((latestNoteTitle: string | undefined) => {
      if (!latestNoteTitle || (latestNoteTitle === selectedNote?.title)) return;
      if(!id) return;
      console.log("saving");
      dispatch(setIsSaving(true));
      console.log("saving title...");
      mutate({
          noteId: selectedNote!.id,
          title: noteTitle
        }, {
          onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["user-notes"]})
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
        if(selectedNote){
          setNoteTitle(selectedNote!.title || "untitled");
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

    const handleNavigateFolder = async () => {
      const folderId = `${selectedNote?.folder!.name.toLowerCase().replace(/\s+/g, "-")}-${selectedNote?.folder!.id}`;
      navigate(`/Folder/${folderId}`);
    }
    
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
                    className="w-full resize-none text-4xl font-extrabold text-foreground bg-transparent dark:text-white outline-none border-none focus:ring-0 leading-tight"
                    rows={1}
                    id="note-title-textarea"
                />
                {selectedNote?.folder ? (
                  <div className="flex gap-2 items-center my-1 text-secondary hover:underline"
                    onClick={handleNavigateFolder}>
                    <FolderIcon width={18}/>
                    <p className=" cursor-pointer">
                      {selectedNote.folder.name}
                    </p>
                  </div>
                ): (
                  <div className="flex items-center gap-2 mt-2">
                    <NoteHeaderUpdateFolderButton/>
                    <NoteHeaderAutoAssignButton/>
                  </div>
                )}
            </motion.div>
        )}

        {(selectedNote?.summary && !isSummarizing) && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={cn(
              "flex flex-col gap-3 mt-3 py-4 px-4 rounded-3xl text-secondary",
              // Light mode gradient
              "bg-gradient-to-b from-white to-[#ECE4FF]",
              // Disable light gradient in dark mode, apply dark gradient
              "dark:bg-gradient-to-b dark:from-[#1C1B1F] dark:to-[#2A2730] dark:text-gray-100"
            )}
          >

            <div className="flex flex-wrap gap-2">
                {selectedNote.keywords.map((topic, index) => (
                <GradientBadge key={index} label={topic} />
                ))}
            </div>

            <div className="mt-4">
                <h1 className="text-primary-hard dark:text-primary text-2xl font-medium">Summary</h1>
                <p className="text-sm text-secondary">{selectedNote.summary}</p>

                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-wrap gap-2 mt-4"
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
                            className="text-secondary dark:bg-surface-container-highest px-3 py-1 my-0.5 rounded-full text-xs font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
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
        {isSummarizing && (
            <NoteSummaryLoading type={"Summarizing"}/>
        )}
        <div className="mt-4 flex gap-2 justify-items-center text-white pl-6 pb-4">
            <Button 
              className="text-xs rounded-2xl bg-primary-hard/50 hover:bg-primary-hard/80"
              disabled={isSummarizing}
              onClick={handleSummarize}
            >
              {isSummarizing ? 
                <>
                  <Loader2 className="animate-spin"/>
                  Summarizing
                </> : 
                <>
                  <PenIcon/>  
                  Summarize
                </>
              }
            </Button>
            <Button className="text-xs rounded-2xl bg-red-400 hover:bg-red-600 font-bold">
              <NotebookIcon/>
              Create Study Set
            </Button>
            <Button className="text-xs rounded-2xl text-on-primary cursor-pointer hover:-translate-y-0.5 transition-transform"
              onClick={() => {
                dispatch(toggleChat());
              }}
            >
              <BotMessageSquareIcon/>
              Ask
            </Button>
          </div>
        </div>
    )
}
