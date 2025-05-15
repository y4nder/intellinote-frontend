export type MessageType = "normal" | "loading" | "step";

export interface ChatMessage {
  id: string;
  content: string;
  noteCitations?: NoteCitation[];
  folderCitations?: FolderCitation[];
  isUser: boolean;
  timestamp: string;
  type?: MessageType; 
}

export interface NoteCitation {
  noteId: string;
  snippetId: string;
  text: string;
}

export interface FolderCitation {
  folderId: string;
  text: string;
}