import { BreadcrumbUi } from "@/components/ui/breadcrumb-ui";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import { useSidebar } from "@/providers/sidebar";
import { SidebarOpenIcon } from "lucide-react";
import { useState } from "react";
import { Block } from "@blocknote/core";
import { sampleBlockNote } from "@/data/mockData";

export default function NoteEditor() {
    const { selectedNote } = useSelector((state: RootState) => state.folderNotes);
    const { isCollapsed, toggleSidebar } = useSidebar();

    const [blocks, setBlocks] = useState<Block[]>([]);
 
    const editor = useCreateBlockNote({
        initialContent: [...sampleBlockNote],
    });
  
    return (
      <div className="min-h-screen w-full bg-white flex flex-col">
        {/* Header */}
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
          <div className="mb-6 text-center px-4">
            <h1 className="text-4xl font-extrabold text-foreground">
              {selectedNote?.title || "Untitled Note"}
            </h1>
          </div>
  
          <div className="flex flex-col gap-10">
            <BlockNoteView editor={editor}
                onChange={() => {
                    // Saves the document JSON to state.
                    setBlocks(editor.document);
                }} 
            data-theming-css-variables-demo />
          </div>
        </div>
      </div>
    );
  }
  