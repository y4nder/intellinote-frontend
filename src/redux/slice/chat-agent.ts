import { ChatMessage } from "@/types/chatMessage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LoadingType = "Thinking..." | "Analyzing..." | undefined

interface ChatAgentLoadingState {
    isThinking: boolean,
    type : LoadingType
}

interface ChatAgentState {
    threadId? : string;
    isCollapsed: boolean;
    chatMessages: ChatMessage[];
    loadingState: ChatAgentLoadingState
}

const initialState : ChatAgentState = {
    threadId : undefined,
    isCollapsed: true,
    chatMessages: [
        {
          id: new Date().toISOString() + "_" + Math.random().toString(),
          content: "How can I help you with your notes today?",
          isUser: false,
          timestamp: new Date().toISOString(),
        },
    ],
    loadingState : {
        isThinking : false,
        type : undefined
    }
};

const chatAgentSlice = createSlice({
    name : "chatAgent",
    initialState,
    reducers: {
        setChatMessages: (state, action: PayloadAction<ChatMessage[]>) => {
            state.chatMessages = action.payload;
        },
        addChatMessage: (state, action : PayloadAction<ChatMessage>) => {
            state.chatMessages.push(action.payload);
        },
        toggleChat: (state) => {
            state.isCollapsed = !state.isCollapsed;
        },
        setChatCollapsed : (state, action: PayloadAction<boolean>) => {
            state.isCollapsed = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            if (action.payload === false) {
                state.loadingState = { isThinking: false, type: undefined };
                const lastMessage = state.chatMessages[state.chatMessages.length - 1];
                if (lastMessage?.type === "loading") {
                    state.chatMessages.pop();
                }
                return;
            }
            
            state.chatMessages.push({
              id: new Date().toISOString() + "_" + Math.random().toString(),
              content: "Thinking...",
              isUser: false,
              timestamp: new Date().toISOString(),
              type: "loading",
            });

            state.loadingState = {
                isThinking: true,
                type: "Thinking...",
            };
        },
        setChatThreadId : (state, action: PayloadAction<string | undefined>) => {
            state.threadId = action.payload
        }
    },
})

export const {
    setChatThreadId, 
    setChatMessages, 
    addChatMessage, 
    toggleChat, 
    setChatCollapsed, 
    setLoading 
} = chatAgentSlice.actions;
export default chatAgentSlice.reducer;