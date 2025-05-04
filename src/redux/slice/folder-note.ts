import { mockFolders } from "@/data/mockData";
import { Folder } from "@/types/folder";
import { Note } from "@/types/note";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface FolderNoteState {
    notes: Note[];
    folders: Folder[];
    selectedNote: Note | null;
    selectedFolder: Folder | null;
    searchQuery: string;
    isQuerying: boolean;
    isSaving: boolean;
}

const initialState: FolderNoteState = {
    notes: [],
    selectedNote: null,
    folders: mockFolders,
    selectedFolder: null,
    searchQuery: "",
    isQuerying: false,
    isSaving: false
};

const folderNoteSlice = createSlice({
    name: "folderNote",
    initialState,
    reducers: {
        addNote: (state, action: PayloadAction<Note>) => {
            state.notes = [action.payload, ...state.notes];
        },
        setNotes: (state, action: PayloadAction<Note[]>) => {
            state.notes = action.payload;
        },
        setFolders: (state, action: PayloadAction<Folder[]>) => {
            state.folders = action.payload;
        },
        setSelectedNote: (state, action: PayloadAction<Note | null>) => {
            state.selectedNote = action.payload;
        },
        setSelectedFolder: (state, action: PayloadAction<Folder | null>) => {
            state.selectedFolder = action.payload;
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setNoteContent: (state, action: PayloadAction<Note>) => {
            const note = state.notes.find(f => f.id === action.payload.id);
            if(!note) return;
            note!.content = action.payload.content;
        },
        setIsQuerying : (state, action: PayloadAction<boolean> ) => {
            state.isQuerying = action.payload;
        },
        setIsSaving : (state, action: PayloadAction<boolean>) => {
            state.isSaving = action.payload;
        }
    }
})

export const { setNotes, setFolders, setSelectedNote, setSelectedFolder, setSearchQuery, setNoteContent, setIsQuerying, setIsSaving, addNote} = folderNoteSlice.actions;

export default folderNoteSlice.reducer;