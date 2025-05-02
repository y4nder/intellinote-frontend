import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slice/auth";
import folderNoteReducer from "./slice/folder-note";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        folderNotes: folderNoteReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;