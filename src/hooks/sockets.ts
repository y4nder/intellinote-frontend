import { connection, startConnection } from "@/lib/socket";
import { useWebSocket } from "@/providers/socketProvider";
import { useEffect } from "react";


export interface NotificationStandard {
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

export const useSummarizerSocketMocked = (onNotification: (notification: SummarizerMessage) => void) => {
    useEffect(() => {
      startConnection().then(() => {
        connection.on("ManualDevNotify", onNotification);
    });
  
    return () => {
        connection.off("ManualDevNotify", onNotification);
    };
    }, [onNotification]);
};
