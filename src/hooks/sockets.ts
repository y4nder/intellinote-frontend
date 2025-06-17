import { useWebSocket } from "@/providers/socket/socketContext";
import {
  AgentStepMessage,
	BroadcastMessage,
	EmbeddingDoneMessage,
	EventKeys,
	FolderUpdateDoneMessage,
	NotificationStandard,
	SummarizationFailedMessage,
	SummarizerMessage,
} from "@/providers/socket/types";
import { useEffect } from "react";

export const useStandardNotificationSocket = (onNotification: (notification: NotificationStandard) => void) => {
	const { on, off } = useWebSocket();

	useEffect(() => {
		on("NotifyStandard", onNotification);
		return () => off("NotifyStandard", onNotification);
	}, [on, off, onNotification]);
};

export const useNotificationSocket = (onNotification: (notification: BroadcastMessage) => void) => {
	const message : EventKeys = "broadcastmessage";
	const { on, off } = useWebSocket();
	useEffect(() => {
		on(message, onNotification);
		return () => off(message, onNotification);
	}, [on, off, onNotification]);
};

export const useNotifyEmbeddingDoneSocket = (onNotification: (notification: EmbeddingDoneMessage) => void) => {
	const message = "NotifyEmbeddingDone";
	const { on, off } = useWebSocket();
	useEffect(() => {
		on(message, onNotification);
		return () => off(message, onNotification);
	}, [on, off, onNotification]);
};

export const useSummarizerSocket = (onNotification: (notification: SummarizerMessage) => void) => {
	const message = "NotifyGenerationDone";
	const { on, off } = useWebSocket();
	useEffect(() => {
		on(message, onNotification);
		return () => off(message, onNotification);
	}, [on, off, onNotification]);
};

export const useSummarizerFailedSocket = (onNotification: (notification: SummarizationFailedMessage) => void) => {
	const message = "NotifyGenerationFailed";
	const { on, off } = useWebSocket();
	useEffect(() => {
		on(message, onNotification);
		return () => off(message, onNotification);
	}, [on, off, onNotification]);
};

export const useFolderUpdateDoneSocket = (onNotification: (notification: FolderUpdateDoneMessage) => void) => {
	const message = "NotifyFolderUpdateDone";
	const { on, off } = useWebSocket();
	useEffect(() => {
		on(message, onNotification);
		return () => off(message, onNotification);
	}, [on, off, onNotification]);
};

export const useAgentStepUpdateSocket = (onNotification: (notification: AgentStepMessage) => void) => {
	const message = "NotifyAgentStep";
	const { on, off } = useWebSocket();
	useEffect(() => {
		on(message, onNotification);
		return () => off(message, onNotification);
	}, [on, off, onNotification]);
};

export const useDebugSocket = (onNotification: (msg: string) => void) => {
  const message : EventKeys = "ManualDevNotify";
	const { on, off } = useWebSocket();
	useEffect(() => {
		on(message, onNotification);
		return () => off(message, onNotification);
	}, [on, off, onNotification]);
}
