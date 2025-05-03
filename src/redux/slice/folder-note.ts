import { mockFolders
    // , mockGetUserResponse 
} from "@/data/mockData";
import { Folder } from "@/types/folder";
import { Note } from "@/types/note";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FolderNoteState {
    notes: Note[];
    folders: Folder[];
    selectedNote: Note | null;
    selectedFolder: Folder | null;
    searchQuery: string;
}

const initialState: FolderNoteState = {
    notes: [],
    selectedNote: null,
    folders: mockFolders,
    selectedFolder: null,
    searchQuery: ""
};

const folderNoteSlice = createSlice({
    name: "folderNote",
    initialState,
    reducers: {
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
        }
    }
})

export const { setNotes, setFolders, setSelectedNote, setSelectedFolder, setSearchQuery, setNoteContent } = folderNoteSlice.actions;

export default folderNoteSlice.reducer;