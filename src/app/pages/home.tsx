import { useState, useEffect } from "react";
import { Search, X, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-is-mobile";
import Sidebar from "@/components/sidebar/Sidebar";
import NoteCard from "@/components/notecard/NoteCard";
import FolderCard from "@/components/foldercard/FolderCard";
import ChatPanel from "@/components/chat/ChatPanel";
import { useSidebar } from "@/providers/sidebar";
import { ChatMessage } from "@/types/chatMessage";
import { Folder } from "@/types/folder";
import { Note } from "@/types/note";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/redux/store";
import { setSearchQuery } from "@/redux/slice/folder-note";

//done create sidebar context
//done create application reducer context
//todo modularize this page
//todo create chat agent context


export default function Home() {
  // Local state initialization
  const dispatch = useDispatch<AppDispatch>();
  const isMobile = useIsMobile();
  const {isCollapsed, toggleSidebar} = useSidebar();
  const {folders, notes, searchQuery} = useSelector((state: RootState) => state.folderNotes);
  
  
  const [isChatCollapsed, setIsChatCollapsed] = useState(true);

  // Update sidebar and chat panel when screen size changes
  useEffect(() => {
    if (isMobile) {
      setIsChatCollapsed(true);
    }
  }, [isMobile]);
  
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      id: "1",
      content: "How can I help you with your notes today?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);

  const clearSearchQuery = () => {
    dispatch(setSearchQuery(""));
  };

  const handleChangeQuery = (query: string) => { 
    dispatch(setSearchQuery(query));
  }

  const toggleChat = () => {
    setIsChatCollapsed(!isChatCollapsed);
  };


  const addChatMessage = (content: string, isUser: boolean) => {
    const newMessage = {
      id: Date.now().toString(),
      content,
      isUser,
      timestamp: new Date(),
    };
    setChatMessages((prev) => [...prev, newMessage]);

    // Add assistant response after a short delay if the message is from the user
    if (isUser) {
      setTimeout(() => {
        const responses = [
          "I can help you organize your notes better! Would you like some suggestions?",
          "Have you tried using tags to categorize your notes?",
          "You can create folders to group related notes together.",
          "Would you like me to help you search for specific notes?",
          "Is there anything specific you'd like to know about note organization?",
        ];
        const randomResponse =
          responses[Math.floor(Math.random() * responses.length)];

        setChatMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            content: randomResponse,
            isUser: false,
            timestamp: new Date(),
          },
        ]);
      }, 1000);
    }
  };

  const handleCreateNote = () => {
    alert("Create new note functionality would go here");
  };

  // Create a context value to pass to components
  const appContextValue = {
    isChatCollapsed,
    chatMessages,
    toggleChat,
    addChatMessage,
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <div style={{ display: "none" }}>{JSON.stringify(appContextValue)}</div>

      {/* Sidebar with mobile responsive behavior */}
      <div className={cn(
        "fixed md:relative z-20",
        isCollapsed && "translate-x-[-100%] md:translate-x-0 md:w-16",
        !isCollapsed && "translate-x-0 w-64",
        "transition-all duration-300"
      )}>
        <Sidebar/>
      </div>
      
      {/* todo this section will have its own component */}
      <main
        className={cn(
          "flex-1 overflow-y-auto transition-all duration-300 relative",
          !isCollapsed && "md:ml-8",
          isCollapsed && "md:ml-8",
        )}
      >
        <div className="p-6">
          {/* Top Bar */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center bg-white rounded-lg shadow-sm w-full max-w-xl">
              <Search className="text-gray-400 h-4 w-4 ml-4" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => handleChangeQuery(e.target.value)}
                placeholder="Search notes..."
                className="py-3 px-3 rounded-lg flex-1 border-none focus:outline-none focus:ring-0 h-12"
              />
              {searchQuery && (
                <button
                  onClick={clearSearchQuery}
                  className="text-gray-400 hover:text-gray-600 mr-2"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            <Button
              onClick={handleCreateNote}
              className="ml-4 bg-primary hover:bg-primary/90 text-white px-4 py-2 h-12"
            >
              <Plus className="h-4 w-4 mr-1" />
              <span>Create</span>
            </Button>
          </div>

          {/* Recent Notes Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Recent Notes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {notes.map((note: Note) => (
                <NoteCard key={note.id} note={note} />
              ))}
            </div>
          </div>

          {/* Recent Folders Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
              Recent Folders
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {folders.map((folder: Folder) => (
                <FolderCard key={folder.id} folder={folder} />
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Chat panel with mobile responsive behavior */}
      <div className={cn(
        "fixed md:relative z-10",
        isChatCollapsed ? 
          "translate-x-[100%] md:translate-x-[100%] md:w-0 w-0" : 
          "translate-x-0 right-0 w-full md:w-80",
          "transition-all duration-300 h-full"
      )}>
        <ChatPanel
          isChatCollapsed={isChatCollapsed}
          toggleChat={toggleChat}
          chatMessages={chatMessages}
          addChatMessage={addChatMessage}
        />
      </div>
      
      {/* Mobile toggle buttons */}
      {isMobile && (
        <>
          <div className="fixed bottom-4 left-4 z-30">
            <button
              onClick={toggleSidebar}
              className="bg-primary text-white rounded-full p-3 shadow-lg"
            >
              {isCollapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
            </button>
          </div>
          
          <div className="fixed bottom-4 right-4 z-30">
            <button
              onClick={toggleChat}
              className="bg-secondary text-white rounded-full p-3 shadow-lg"
            >
              {isChatCollapsed ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
