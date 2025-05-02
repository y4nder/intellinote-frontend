import React, { useState, useEffect, useRef } from "react";
import { ChatMessage } from "@/data/mockData";
import { cn } from "@/lib/utils";
import { Send, ChevronLeft, ChevronRight, Bot, ChevronDown } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-is-mobile";

interface ChatPanelProps {
  isChatCollapsed: boolean;
  toggleChat: () => void;
  chatMessages: ChatMessage[];
  addChatMessage: (message: string, isUser: boolean) => void;
}

export default function ChatPanel({
  isChatCollapsed,
  toggleChat,
  chatMessages,
  addChatMessage,
}: ChatPanelProps) {
  const isMobile = useIsMobile();
  const [newChatMessage, setNewChatMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  //scroll button
  const [showScrollButton, setShowScrollButton] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  // Update panel appearance based on mobile state
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatMessages]);

  useEffect(() => {
    const el = scrollAreaRef.current;
    if (!el) return;
  
    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleScroll = () => {
    const el = scrollAreaRef.current;
    if (!el) return;
  
    const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 50;
    setShowScrollButton(!isAtBottom);
  };


  const handleSendMessage = () => {
    if (newChatMessage.trim()) {
      addChatMessage(newChatMessage, true);
      setNewChatMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (isChatCollapsed) {
    return (
      <div className="fixed right-0 top-24 z-50">
        <button
          onClick={toggleChat}
          className="bg-secondary text-white rounded-l-full p-3 shadow-lg"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="h-screen">
      {/* Overlay when chat is open on mobile */}
      {isMobile && !isChatCollapsed && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20"
          onClick={toggleChat}
        ></div>
      )}
      
      <div className="bg-white shadow-lg h-full flex flex-col transition-all duration-300 ease-in-out border-l border-gray-100 w-full md:w-80 z-30 relative">
        <div className="p-4 border-b border-gray-100 flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-white">
              <Bot className="h-4 w-4" />
            </div>
            <span className="ml-3 font-medium">Note Assistant</span>
          </div>
          <button
            onClick={toggleChat}
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
                <div
                  key={message.id}
                  className={cn(
                    "flex items-start",
                    message.isUser && "justify-end",
                  )}
                >
                  {!message.isUser && (
                    <Avatar className="w-8 h-8 mr-3">
                      <AvatarFallback className="bg-secondary text-white">
                        <Bot className="h-4 w-4" />
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "p-3 rounded-lg max-w-[85%]",
                      message.isUser
                        ? "bg-primary/10 rounded-tr-none mr-3"
                        : "bg-gray-100 rounded-tl-none",
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  {message.isUser && (
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-gray-200 text-gray-500">
                        ME
                      </AvatarFallback>
                    </Avatar>
                  )}
                </div>
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

        <div className="p-4 border-t border-gray-100">
          <div className="relative">
            <Input
              value={newChatMessage}
              onChange={(e) => setNewChatMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask anything..."
              className="pr-10 rounded-full"
            />
            <button
              onClick={handleSendMessage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-secondary"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
