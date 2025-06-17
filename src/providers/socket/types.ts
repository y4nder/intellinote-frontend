export interface SocketEvents {
	NotifyStandard: (notification: NotificationStandard) => void;
	broadcastmessage: (notification: BroadcastMessage) => void;
	NotifyEmbeddingDone: (notification: EmbeddingDoneMessage) => void;
	NotifyGenerationDone: (notification: SummarizerMessage) => void;
	NotifyGenerationFailed: (notification: SummarizationFailedMessage) => void;
	NotifyFolderUpdateDone: (notification: FolderUpdateDoneMessage) => void;
	NotifyAgentStep: (notification: AgentStepMessage) => void;
	ManualDevNotify: (message: string) => void;
}

export interface SocketMethods {
	ConnectToGroupChat: (chatId: string) => Promise<void>;
}

export type EventKeys = keyof SocketEvents;
export type MethodKeys = keyof SocketMethods;

export interface NotificationStandard {
	type: "Note" | "Folder";
	title: string;
	message: string;
	id: string;
	name: string;
}

export interface BroadcastMessage {
	message: string;
	dateTime: string;
}

export interface EmbeddingDoneMessage {
	message: string;
	dateTime: string;
	milleSeconds: number;
}

export interface GeneratedResponse {
	keywords: string[];
	summary: string;
	topics: string[];
}

export interface SummarizerMessage {
	id: string;
	name: string;
	response: GeneratedResponse;
	dateTime: string;
	milleSeconds: number;
}

export interface SummarizationFailedMessage {
	id: string;
	message: string;
	dateTime: string;
	milleSeconds: number;
}

export interface FolderUpdateDoneMessage {
	id: string;
	message: string;
	folderDescription: string;
	dateTime: string;
	milleSeconds: number;
}

export interface AgentStepMessage {
	message: string;
}
