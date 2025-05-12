import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth";
import folderNoteReducer from "./slice/folder-note";
import chatAgentReducer from "./slice/chat-agent";
import preferenceReducer from "./slice/preference";
import viewSliceReducer from "./slice/views";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        folderNotes: folderNoteReducer,
        chatAgent: chatAgentReducer,
        preference: preferenceReducer,
        views: viewSliceReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;