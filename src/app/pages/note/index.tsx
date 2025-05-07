import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { BlockNoteView } from "@blocknote/mantine";
import { useCallback, useEffect, useMemo, useState } from "react";
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


export default function NoteEditor() {
    const dispatch = useDispatch();
    const { selectedNote } = useSelector((state: RootState) => state.folderNotes);
    const {noteId} = useParams();
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

      dispatch(setIsSaving(true));
      console.log("saving note...");

      const textBlocks = JSON.stringify(latestBlocks);
      mutate({
        noteId: id!,
        content: textBlocks
      }, {
        onSuccess: () => {
          console.log("saved note...");
          dispatch(setIsSaving(false));
        },
      })
    }, [dispatch, id, mutate]), 3000);


    // fetching if id exists
    useEffect(() => {
      if(data && data.note) {
        setInitialContent(data.content);
      }

      if(data && data.note && (!selectedNote || data && data?.note?.id !== selectedNote?.id)){
        dispatch(setSelectedNote(data.note!));
        setInitialContent(data.content);
      }
    }, [data, selectedNote, dispatch]);
    

    // creating the editor
    const editor = useMemo(() => {
      if(initialContent === "loading"){
        console.log("still loading editor");
        return undefined;
      }
      console.log("loaded editor");
      return BlockNoteEditor.create({initialContent});
    }, [initialContent])

    
    return (
      <div className="min-h-screen w-full bg-white flex flex-col">
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
          </motion.div>
          )}
        </div>
      </div>
    );
  }

