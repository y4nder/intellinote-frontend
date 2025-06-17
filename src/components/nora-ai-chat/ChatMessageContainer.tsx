import { cn } from "@/lib/utils"
import { ChatMessage } from "@/types/chatMessage"
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BotMessageSquare } from "lucide-react"
import NoteCitationContainer from "./citations/NoteCitationContainer";
import FolderCitationContainer from "./citations/FolderCitationContainer";
import Markdown from 'markdown-to-jsx'



interface ChatMessageProps {
  message: ChatMessage
}

export default function ChatMessageContainer({ message }: ChatMessageProps) {
  const isUser = message.isUser;
  const isLoading = message.type === "loading";
  const isStep = message.type === "step";

  return (
    <div className={cn("flex items-start", isUser && "justify-end")}>
    {!isUser && (
      <Avatar className="w-fit h-fit mr-3">
        <AvatarFallback>
          <BotMessageSquare className={cn(
            "text-primary-hard dark:text-on-surface group-hover:text-white",
            isStep && "text-yellow-600 dark:text-yellow-400"
          )} />
        </AvatarFallback>
      </Avatar>
    )}

    <div
      className={cn(
        "px-4 py-2 rounded-2xl max-w-[85%]",
        isUser
          ? "bg-primary/10 rounded-tr-none mr-3"
          : isStep
          ? "bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-600 rounded-tl-none px-2 py-1"
          : "bg-secondary-container/50 rounded-tl-none"
      )}
    >
      {isLoading ? (
        <div className="flex space-x-1">
          <div className="h-2 w-2 bg-primary-hard dark:bg-on-surface rounded-full animate-bounce [animation-delay:-0.3s]" />
          <div className="h-2 w-2 bg-primary-hard dark:bg-on-surface rounded-full animate-bounce [animation-delay:-0.15s]" />
          <div className="h-2 w-2 bg-primary-hard dark:bg-on-surface rounded-full animate-bounce" />
        </div>
      ) : (
        !isStep ? (
          <div>
            <Markdown
              className={cn(
                "text-[13px] whitespace-pre-line break-words text-on-secondary-container"
              )}>
              {message.content}
            </Markdown>

            {message.noteCitations?.map(citation => (
              <div className="mt-2" key={new Date().toISOString() + "_" + Math.random().toString()}>
                <NoteCitationContainer citation={citation} />
              </div>
            ))}

            {message.folderCitations?.map(citation => (
              <div key={new Date().toISOString() + "_" + Math.random().toString()} className="mt-2">
                <FolderCitationContainer citation={citation} />
              </div>
            ))}
          </div>
        ): (
          <div className="text-[10px] font-semibold text-yellow-700 dark:text-yellow-300 mb-1">
            Step
            <p className="text-yellow-900 dark:text-yellow-100 font-light text-[12px]">{message.content}</p>
          </div>
        )
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
