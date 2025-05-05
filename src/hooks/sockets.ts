import { connection, startConnection } from "@/lib/socket";
import { useEffect } from "react";


export interface NotificationStandard {
    title: string;
    message: string;
    id: string;
    name: string;
}

export const useStandardNotificationSocket = (onNotification: (notification: NotificationStandard) => void) => {
    useEffect(() => {
        startConnection().then(() => {
            connection.on("NotifyStandard", onNotification);
        });
        
        return () => {
            connection.off("NotifyStandard", onNotification);
        };
    }, [onNotification]);
};



export interface BroadcastMessage {
    message: string;
    dateTime: string;
}

export const useNotificationSocket = (onNotification: (notification: BroadcastMessage) => void) => {
    useEffect(() => {
        startConnection().then(() => {
            connection.on("BroadcastMessage", onNotification);
        });
        
        return () => {
            connection.off("BroadcastMessage", onNotification);
        };
    }, [onNotification]);
};

export interface EmbeddingDoneMessage {
    message: string;
    dateTime: string;
    milleSeconds: number
}

export const useNotifyEmbeddingDoneSocket = (onNotification: (notification: EmbeddingDoneMessage) => void) => {
    useEffect(() => {
      startConnection().then(() => {
        connection.on("NotifyEmbeddingDone", onNotification);
    });
  
    return () => {
        connection.off("NotifyEmbeddingDone", onNotification);
    };
    }, [onNotification]);
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
    useEffect(() => {
      startConnection().then(() => {
        connection.on("NotifyGenerationDone", onNotification);
    });
  
    return () => {
        connection.off("NotifyGenerationDone", onNotification);
    };
    }, [onNotification]);
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
