import { useWebSocket } from "@/providers/socketProvider";
import { useEffect } from "react";


export interface NotificationStandard {
    type: "Note" | "Folder";
    title: string;
    message: string;
    id: string;
    name: string;
}

export const useStandardNotificationSocket = (
  onNotification: (notification: NotificationStandard) => void
) => {
  const { on, off } = useWebSocket();

  useEffect(() => {
    on("NotifyStandard", onNotification);
    return () => off("NotifyStandard", onNotification);
  }, [on, off, onNotification]);
};

export interface BroadcastMessage {
    message: string;
    dateTime: string;
}

export const useNotificationSocket = (
    onNotification: (notification: BroadcastMessage) => void
  ) => {
  const message = "BroadcastMessage";
  const { on, off } = useWebSocket();
  useEffect(() => {
    on(message, onNotification);
    return () => off(message, onNotification);
  }, [on, off, onNotification]);
};
export interface EmbeddingDoneMessage {
    message: string;
    dateTime: string;
    milleSeconds: number
}

export const useNotifyEmbeddingDoneSocket = (onNotification: (notification: EmbeddingDoneMessage) => void) => {
  const message = "NotifyEmbeddingDone";
  const { on, off } = useWebSocket();
  useEffect(() => {
    on(message, onNotification);
    return () => off(message, onNotification);
  }, [on, off, onNotification]);
};

export interface GeneratedResponse {
    keywords: string[],
    summary: string;
    topics: string[]
}

export interface SummarizerMessage {
    id: string;
    name: string;
    response: GeneratedResponse,
    dateTime: string;
    milleSeconds: number
}

export const useSummarizerSocket = (onNotification: (notification: SummarizerMessage) => void) => {
  const message = "NotifyGenerationDone";
  const { on, off } = useWebSocket();
  useEffect(() => {
    on(message, onNotification);
    return () => off(message, onNotification);
  }, [on, off, onNotification]);
};

export interface SummarizationFailedMessage {
  id: string;
  message: string;
  dateTime: string;
  milleSeconds: number;
}

export const useSummarizerFailedSocket = (onNotification: (notification: SummarizationFailedMessage) => void) => {
  const message = "NotifyGenerationFailed";
  const { on, off } = useWebSocket();
  useEffect(() => {
    on(message, onNotification);
    return () => off(message, onNotification);
  }, [on, off, onNotification]);
};


export interface FolderUpdateDoneMessage {
  id: string;
  message: string;
  folderDescription: string;
  dateTime: string;
  milleSeconds: number;
}

export const useFolderUpdateDoneSocket = (onNotification: (notification: FolderUpdateDoneMessage) => void) => {
  const message = "NotifyFolderUpdateDone";
  const { on, off } = useWebSocket();
  useEffect(() => {
    on(message, onNotification);
    return () => off(message, onNotification);
  }, [on, off, onNotification]);
};

export interface AgentStepMessage {
  message: string;
}

export const useAgentStepUpdateSocket = (onNotification: (notification: AgentStepMessage) => void) => {
  const message = "NotifyAgentStep";
  const { on, off } = useWebSocket();
  useEffect(() => {
    on(message, onNotification);
    return () => off(message, onNotification);
  }, [on, off, onNotification]);
};

