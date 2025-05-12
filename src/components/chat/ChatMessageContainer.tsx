import { cn } from "@/lib/utils"
import { ChatMessage } from "@/types/chatMessage"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BotMessageSquare } from "lucide-react"
import NoteCitationContainer from "./citations/NoteCitationContainer";
import FolderCitationContainer from "./citations/FolderCitationContainer";

interface ChatMessageProps {
  message: ChatMessage
}

export default function ChatMessageContainer({ message }: ChatMessageProps) {
  const isUser = message.isUser;
  const isLoading = message.type === "loading";

  return (
    <div className={cn("flex items-start", isUser && "justify-end")}>
      {!isUser && (
        <Avatar className="w-fit h-fit mr-3">
          <AvatarFallback>
            <BotMessageSquare className="text-primary-hard dark:text-on-surface group-hover:text-white "/>
          </AvatarFallback>
        </Avatar>
      )}

      <div
        className={cn(
          "p-3 rounded-2xl max-w-[85%]",
          isUser
            ? "bg-primary/10 rounded-tr-none mr-3"
            : "bg-secondary-container/50 rounded-tl-none"
        )}
      >
        {isLoading ? (
          <div>
            <div className="flex space-x-1">
              <div className="h-2 w-2 bg-primary-hard dark:bg-on-surface rounded-full animate-bounce [animation-delay:-0.3s]" />
              <div className="h-2 w-2 bg-primary-hard dark:bg-on-surface rounded-full animate-bounce [animation-delay:-0.15s]" />
              <div className="h-2 w-2 bg-primary-hard dark:bg-on-surface rounded-full animate-bounce" />
            </div>
          </div>
        ) : (
          <>
            <p className="text-xs text-on-secondary-container whitespace-pre-line break-words">
              {message.content}
            </p>
            {message.noteCitations && (
              message.noteCitations.map(citation => (
                <div className="mt-2" key={new Date().toISOString() + "_" + Math.random().toString()} >
                  <NoteCitationContainer citation={citation}/>
                </div>
              ))
            )}
            {message.folderCitations && (
              message.folderCitations.map(citation => (
                <div key={new Date().toISOString() + "_" + Math.random().toString()} className="mt-2">
                  <FolderCitationContainer citation={citation}/>
                </div>
              ))
            )}
          </>

        )}
      </div>

      {isUser && (
        <Avatar className="w-fit h-fit">
          <AvatarFallback className="bg-gray-200 text-gray-500 p-2 text-xs">
            ME
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
