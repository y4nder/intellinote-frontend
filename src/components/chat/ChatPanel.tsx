import React, { useState, useEffect, useRef } from "react";

import { cn } from "@/lib/utils";
import { Send, ChevronRight, ChevronDown, BotMessageSquare, StopCircleIcon } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { ChatMessage } from "@/types/chatMessage";
import { AppDispatch, RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { addChatMessage, setChatCollapsed, setLoading, toggleChat } from "@/redux/slice/chat-agent";
import { mockResponses } from "@/data/mockData";
import ChatMessageContainer from "./ChatMessageContainer";

export default function ChatPanel() {
  const isMobile = useIsMobile();
  const [newChatMessage, setNewChatMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);
  const {isCollapsed, chatMessages, loadingState} = useSelector((state: RootState) => state.chatAgent);
  const dispatch = useDispatch<AppDispatch>();
  

  //scroll button
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 300); 
  
    return () => clearTimeout(timeout);
  }, [isCollapsed]);

  useEffect(() => {
    const el = scrollAreaRef.current;
    if (!el) return;
  
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  
  useEffect(() => {
    if (isMobile) {
      dispatch(setChatCollapsed(true))
    }
  }, [isMobile, dispatch]);
  
  const handleScroll = () => {
    const el = scrollAreaRef.current;
    if (!el) return;
  
    const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 200;
    setShowScrollButton(!isAtBottom);
  };


  const handleSendMessage = () => {
    if (newChatMessage.trim()) {
      handleAddMessage(newChatMessage, true);
      setNewChatMessage("");
    }
  };

  const handleAddMessage = (message: string, isUser: boolean) => {
    const newMessage: ChatMessage = {
      id: new Date().toISOString() + "_" + Math.random().toString(),
      content: message,
      isUser,
      timestamp: new Date().toISOString(),
    };
    dispatch(addChatMessage(newMessage));
    dispatch(setLoading(true));

    // todo replace with actual api call
    setTimeout(() => {
      const botMessage: ChatMessage = {
        id: new Date().toISOString() + "_" + Math.random().toString(),
        content: mockResponses[Math.floor(Math.random() * mockResponses.length)],
        isUser: false,
        timestamp: new Date().toISOString(),
      };

      dispatch(setLoading(false));
      dispatch(addChatMessage(botMessage));
    }, 1000);
  }

  
  const handleToggleChat = () => {
    dispatch(toggleChat());
  }


  const isValidState = () => {
    if(!newChatMessage.trim()){
      return false;
    }

    if(loadingState.isThinking){
      return false;
    }

    return true;
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if(!isValidState()) 
        return;
      handleSendMessage();
    }
  };


  if (isCollapsed) {
    return (
      <div className={cn("chatPanelButton translate-x-[0%] right-4 fixed z-90 p-2 bg-white rounded-full shadow-sm group hover:scale-105 transition-all duration-300", 
        isMobile? "bottom-20" : "bottom-4"
      )}>
        <div
            onClick={handleToggleChat}
            className="rounded-full bg-primary-container text-on-surface-variant p-2 group-hover:bg-primary/90 transition-all duration-300"
        >   
            <BotMessageSquare className="text-primary-hard group-hover:text-white"/>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full z-30">
      <div className="bg-white h-full flex flex-col transition-all duration-300 ease-in-out border-l border-gray-100 w-full md:w-full z-30 relative">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center">
            <div
              className="rounded-full bg-primary-container/40 text-on-surface-variant p-3 group-hover:bg-primary/90 transition-all duration-300"
            >   
              <BotMessageSquare className="text-primary-hard group-hover:text-white"/>
            </div>  
            <span className="ml-3 font-medium">Nora</span>
          </div>
          <button
            onClick={handleToggleChat}
            className="text-gray-400 hover:text-secondary"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div
          className="flex-1 overflow-y-auto p-4"
          ref={scrollAreaRef}
          onScroll={handleScroll}
        >
          <ScrollArea>
            <div className="space-y-4">
              {chatMessages.map((message: ChatMessage) => (
                <ChatMessageContainer key={message.id} message={message}/>
              ))}
              <div ref={scrollRef} className="h-0"></div>
            </div>
          </ScrollArea>
        </div>

        {showScrollButton && (
          <button
            className="absolute bottom-24 right-4 z-40 p-2 rounded-full bg-secondary text-white shadow-lg hover:bg-secondary/90"
            onClick={() => scrollRef.current?.scrollIntoView({ behavior: "smooth" })}
          >
            <ChevronDown className="h-5 w-5" />
          </button>
        )}

        <div className="chat-footer p-4 border-t border-gray-100">
          <div className={cn("relative w-full", isMobile? "mb-4" : "mb-2")}>
            <div className="flex items-center bg-secondary-container/50 rounded-2xl px-4 py-2 text-xs font-mono text-secondary shadow-sm">
              <textarea  
                value={newChatMessage}
                onChange={(e) => setNewChatMessage(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask anything..."
                rows={1}
                className="flex-1 bg-transparent resize-none border-none focus:outline-none focus:ring-0 placeholder:text-secondary/60 py-2"
                style={{ minHeight: "2rem", maxHeight: "8rem", overflowY: "auto" }}
              />
              <button
                onClick={handleSendMessage}
                disabled={!isValidState()} // Example: disable if input is empty
                className={cn(
                  "ml-2 transition",
                  !newChatMessage.trim()
                    ? "text-secondary/40 cursor-not-allowed"
                    : "hover:text-primary"
                )}
              >
                {!loadingState.isThinking ? (<Send className="h-fit w-fit" />)  : ( <StopCircleIcon className="h-fit w-fit" />)}
                
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
