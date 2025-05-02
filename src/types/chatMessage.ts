export type MessageType = "normal" | "loading";

export interface ChatMessage {
    id: string;
    content: string;
    isUser: boolean;
    timestamp: string;
    type?: MessageType; 
  }