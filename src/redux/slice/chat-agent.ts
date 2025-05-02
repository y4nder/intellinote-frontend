import { ChatMessage } from "@/types/chatMessage";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";



interface ChatAgentState {
    isCollapsed: boolean;
    chatMessages: ChatMessage[];
}

const initialState : ChatAgentState = {
    isCollapsed: true,
    chatMessages: [
        {
          id: new Date().toISOString() + "_" + Math.random().toString(),
          content: "How can I help you with your notes today?",
          isUser: false,
          timestamp: new Date().toISOString(),
        },
    ],
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
        }
    },
})

export const { setChatMessages, addChatMessage, toggleChat, setChatCollapsed } = chatAgentSlice.actions;
export default chatAgentSlice.reducer;