import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { BlockNoteView } from "@blocknote/mantine";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import {   Block, BlockNoteEditor, PartialBlock } from "@blocknote/core";
import { motion } from "framer-motion";
import { useGetUserNote } from "@/service/notes/get-user-note";
import { useParams } from "react-router-dom";
import { extractIdFromSlug } from "@/lib/utils";
import { setIsSaving, setSelectedNote } from "@/redux/slice/folder-note";
import NoteTopBar from "./note-topbar";
import { PageLoadingProgress } from "@/components/ui/page-loading-progress";
import NoteHeader from "./note-header";
import { useAutoSave } from "@/hooks/useAutoSave";
import { useUpdateNote } from "@/service/notes/update-note";
import { useNotifyEmbeddingDoneSocket, useSummarizerSocket} from "@/hooks/sockets";
import { toast } from "react-toastify";
import PillNotification from "@/components/notification/pill-notification";
import ScrollTooltip from "@/components/ui/scroll-tooltip";
import { useQueryClient } from "@tanstack/react-query";


export default function NoteEditor() {
    const dispatch = useDispatch();
    const { selectedNote } = useSelector((state: RootState) => state.folderNotes);
    const {noteId, blockId} = useParams();
    const queryClient = useQueryClient();
    const id = extractIdFromSlug(noteId!);
    
    const {data, isLoading} =  useGetUserNote(id!);
    const [initialContent, setInitialContent] = useState<PartialBlock[] | undefined | "loading">("loading");
    const [blocks, setBlocks] = useState<Block[] | undefined>(undefined);
    const {mutate} = useUpdateNote();

    useNotifyEmbeddingDoneSocket((notification) => {
      toast(PillNotification, {
          className: 'p-0 w-[30px] border flex items-center gap-3 rounded-full bg-red-500 px-4 py-2 shadow-md border border-zinc-200 text-sm',
          data: {
            message: notification.message,
            milliSeconds: notification.milleSeconds
          },
          autoClose: 3000,
          closeButton:false,
          position: 'bottom-center',
      });
    })

    useSummarizerSocket((notification) => {
      toast(PillNotification, {
          className: 'p-0 w-[30px] border flex items-center gap-3 rounded-full bg-red-500 px-4 py-2 shadow-md border border-zinc-200 text-sm',
          data: {
            message: `${notification.name} was summarized`,
            milliSeconds: notification.milleSeconds
          },
          autoClose: 3000,
          closeButton:false,
          position: 'bottom-center',
      });
    })

    // auto saving hook
    useAutoSave(blocks, useCallback((latestBlocks: Block[] | undefined) => {
      if (!latestBlocks) 
        return;
      console.log("saving note...");
      dispatch(setIsSaving(true));

      const textBlocks = JSON.stringify(latestBlocks);
      mutate({
        noteId: id!,
        content: textBlocks
      }, {
        onSuccess: () => {
          console.log("saved note...");
          queryClient.invalidateQueries({queryKey:["user-notes", id!]})
          dispatch(setIsSaving(false));
        },
      })
    }, [dispatch, id, mutate]), 3000);

    useEffect(() => {
      if (!data?.note) return;
      
      const noteChanged = !selectedNote || selectedNote.id !== data.note.id;
      const contentMissing = !initialContent || initialContent === "loading";

      console.log("note changed:", noteChanged, "content missing", contentMissing);
      
      if (noteChanged) {
        console.log("entered here");
        dispatch(setSelectedNote(data.note));
        setInitialContent(data.content);
      } else if (contentMissing) {
        console.log("entered here");
        setInitialContent(data.content);
      }
    }, [data, selectedNote, initialContent, dispatch]);

    // creating the editor
    const editor = useMemo(() => {
      if(initialContent === "loading"){
        return undefined;
      }
      console.log("loaded editor");
      return BlockNoteEditor.create({initialContent});
    }, [initialContent])

    const editorRef = useRef<HTMLDivElement | null>(null);

    const blockToScrollToId = blockId; 
    const [tooltipBlockEl, setTooltipBlockEl] = useState<HTMLElement | null>(null);

    useLayoutEffect(() => {
      if (blockToScrollToId && editorRef.current) {
        const timeout = setTimeout(() => {
          const block = editorRef.current?.querySelector(`[data-id="${blockToScrollToId}"]`) as HTMLElement | null;;

          if (block) {
            block.scrollIntoView({ behavior: "smooth", block: "center" });
            setTooltipBlockEl(block);
          }
        }, 100);

        return () => clearTimeout(timeout);
      }
    }, [editor, blockToScrollToId]);

    

    
    return (
      <div className="min-h-screen w-full bg-background flex flex-col">
        <NoteTopBar/>
        {id && (
          <PageLoadingProgress loading={isLoading} /> 
        )}
        {/* Main Content */}
        <div className="py-6 md:px-12 lg:px-24 w-full max-w-4xl mx-auto flex-1 flex flex-col">
          <NoteHeader/>
          {/* Editor */}
          {(!isLoading && initialContent !== "loading" && editor) && (
            <motion.div
              ref={editorRef}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="flex flex-col gap-10"
            >
              <BlockNoteView
                editor={editor!}
                // formattingToolbar={false}
                data-theming-css-variables-demo
                onChange={() => {
                  setBlocks(editor!.document);
                }}
              >
                {/* <FormattingToolbar /> */}
              </BlockNoteView>
              {tooltipBlockEl && (
              <ScrollTooltip
                referenceEl={tooltipBlockEl}
                onClose={() => setTooltipBlockEl(null)}
                text="Jumped to Source"
              />
            )}
            </motion.div>
          )}
        </div>
      </div>
    );
  }

