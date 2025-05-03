import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { FormattingToolbar } from "@blocknote/react";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useSidebar } from "@/providers/sidebar";
import { SidebarOpenIcon } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {   BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { GradientBadge } from "@/components/ui/gradient-badge";
import { motion, AnimatePresence } from "framer-motion";
import { useGetUserNote } from "@/service/notes/get-user-note";
import { useParams } from "react-router-dom";
import { extractIdFromSlug } from "@/lib/utils";
import { setSelectedNote } from "@/redux/slice/folder-note";
import NoteHeaderSkeleton from "./skeletons/note-header-skeleton";

export default function NoteEditor() {
    const dispatch = useDispatch();
    const { selectedNote } = useSelector((state: RootState) => state.folderNotes);
    const { isCollapsed, toggleSidebar } = useSidebar();
    const [noteTitle, setNoteTitle] = useState("");
    const [showAllTopics, setShowAllTopics] = useState(false);
    const {noteId} = useParams();
    const id = extractIdFromSlug(noteId!);
    const TOPIC_DISPLAY_LIMIT = 4;
    const {data, isLoading} =  useGetUserNote(id!);
    const [initialContent, setInitialContent] = useState<PartialBlock[] | undefined | "loading">("loading");


    useEffect(() => {
      if(data){
        setInitialContent(JSON.parse(data!.note!.content!) as PartialBlock[])
      }
    }, [data])
    
    useEffect(() => {
      setNoteTitle(selectedNote?.title || "Untitled Note");
    }, [selectedNote]);

    useEffect(() => {
      if(data && !selectedNote || data && data?.note?.id !== selectedNote?.id){
        dispatch(setSelectedNote(data.note!));
        const content = JSON.parse(data.note!.content!) as PartialBlock[]
        setInitialContent(content);
      }
    }, [data, selectedNote, dispatch]);

    
    useEffect(() => {
      const textarea = document.getElementById("note-title-textarea");
      if (textarea) {
        textarea.style.height = "auto";
        textarea.style.height = `${textarea.scrollHeight}px`;
      }
    }, [noteTitle]);
     
    
    const editor = useMemo(() => {
      if(initialContent === "loading"){
        return undefined;
      }
      return BlockNoteEditor.create({initialContent});
    }, [initialContent])

    
    return (
      <div className="min-h-screen w-full bg-white flex flex-col">
        {/* top bar */}
        <div className="sticky top-0 z-10 backdrop-blur-md mb-4 flex items-center gap-4 px-3 pt-6">
          {isCollapsed ? (
            <div
              className="rounded-full p-2 hover:bg-primary-container hover:text-on-primary-container cursor-pointer"
              onClick={toggleSidebar}
            >
              <SidebarOpenIcon className="h-4 w-4 text-secondary" />
            </div>
          ) : (
            <div className="flex" />
          )}
          <BreadcrumbUi />
        </div>
  
        {/* Main Content */}
        <div className="py-6 md:px-12 lg:px-24 w-full max-w-4xl mx-auto flex-1 flex flex-col">
          <div className="mb-6 px-4">
            {!selectedNote ? (
              <NoteHeaderSkeleton/>
            ): (
              <textarea
                value={noteTitle}
                onChange={(e) => setNoteTitle(e.target.value)}
                placeholder={selectedNote.title}
                className="w-full resize-none text-4xl font-extrabold text-foreground bg-transparent outline-none border-none focus:ring-0 leading-tight"
                rows={1}
                id="note-title-textarea"
              />
            )}

            {/* Summary container */}
            {selectedNote?.summary && (
              <div className="flex flex-col gap-3 mt-3 bg-gradient-to-b from-white to-[#ECE4FF] py-4 px-4 rounded-3xl text-gray-900">
                <div className="flex flex-col gap-2">
                  <div className="flex flex-wrap gap-2">
                    {selectedNote?.keywords.map((topic, index) => (
                      <GradientBadge key  ={index} label={topic} />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2 mt-4 origin-top">
                  <h1 className="text-primary-hard text-2xl font-medium">Summary</h1>
                  <p className="text-sm">{selectedNote?.summary}</p>
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-wrap gap-2 overflow-hidden"
                  >
                    <AnimatePresence initial={false}>
                      {(showAllTopics
                        ? selectedNote?.topics
                        : selectedNote?.topics.slice(0, TOPIC_DISPLAY_LIMIT)
                      )?.map((topic, index) => (
                        <motion.span
                          key={index}
                          layout
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.1 * (index/5.0) }}
                          className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-xs font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors"
                        >
                          {topic}
                        </motion.span>
                      ))}
                    </AnimatePresence>
                  </motion.div>

                  {selectedNote?.topics.length > TOPIC_DISPLAY_LIMIT && (
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setShowAllTopics(!showAllTopics)}
                      className="text-primary underline text-xs font-medium mt-1 self-start"
                    >
                      {showAllTopics ? "See less" : "See more"}
                    </motion.button>
                  )}
                </div>
              </div>
            )}
          </div>
          {(isLoading || initialContent === "loading")? (
            <div></div>
          ): (
            <div className="flex flex-col gap-10">
              <BlockNoteView editor={editor!}
                formattingToolbar={false}
                data-theming-css-variables-demo 
              >
                <FormattingToolbar />
              </BlockNoteView>
            </div>
          ) }

        </div>
      </div>
    );
  }

