import { GeneratedResponse } from "@/hooks/sockets";
import { Folder } from "@/types/folder";
import { Note } from "@/types/note";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FolderNoteState {
    recentNotes: Note[],
    notes: Note[];
    folders: Folder[];
    selectedNote: Note | null;
selectedFolder: Folder | null;
    searchQuery: string;
    isQuerying: boolean;
    isSaving: boolean;
}

const initialState: FolderNoteState = {
    recentNotes: [],
    notes: [],
    selectedNote: null,
    folders: [],
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
        removeNote: (state, action: PayloadAction<Note>) => {
            const noteIdToRemove = action.payload.id;
        
            // Remove from main notes list
            state.notes = state.notes.filter(note => note.id !== noteIdToRemove);
        
            // Remove from recentNotes if exists
            if (state.recentNotes?.some(note => note.id === noteIdToRemove)) {
                state.recentNotes = state.recentNotes.filter(note => note.id !== noteIdToRemove);
            }
        
            // Remove from all folders
            state.folders = state.folders.map(folder => ({
                ...folder,
                notes: folder.notes.filter(note => note.id !== noteIdToRemove),
            }));

            // Remove from selectedFolder if it’s set and contains the note
            if (state.selectedFolder) {
                state.selectedFolder = {
                    ...state.selectedFolder,
                    notes: state.selectedFolder.notes.filter(note => note.id !== noteIdToRemove),
                };
            }
        },       
        setNotes: (state, action: PayloadAction<Note[]>) => {
            state.notes = action.payload;
            state.recentNotes = [...action.payload]
                .sort((a, b) => new Date(b.updatedAt!).getTime() - new Date(a.updatedAt!).getTime())
                .slice(0, 10);
        },
        setFolders: (state, action: PayloadAction<Folder[]>) => {
            state.folders = action.payload;
        },
        removeNoteFromFolder: (state, action: PayloadAction<Note>) => {
            const folderId = action.payload.folder?.id;
            const noteId = action.payload.id;
          
            if (!folderId || !noteId) return;
          
            // Set the note's folder to null in state.notes
            const mainNote = state.notes.find(note => note.id === noteId);
            if (mainNote) {
              mainNote.folder = null;
            }
          
            // Set the note's folder to null in state.recent.notes
            const recentNote = state.recentNotes.find(note => note.id === noteId);
            if (recentNote) {
              recentNote.folder = null;
            }
          
            // Set the note's folder to null in state.selectedNote
            if (state.selectedNote?.id === noteId) {
              state.selectedNote.folder = null;
            }
          
            // Remove the note from the folder in state.folders
            const targetFolder = state.folders.find(folder => folder.id === folderId);
            if (targetFolder) {
              targetFolder.notes = targetFolder.notes.filter(note => note.id !== noteId);
            }
          
            // If the selected folder matches, update it too
            if (state.selectedFolder?.id === folderId) {
              state.selectedFolder.notes = state.selectedFolder.notes.filter(note => note.id !== noteId);
            }
        },
        addNoteToFolder: (
            state,
            action: PayloadAction<{ note: Note; folder: Folder }>
          ) => {
            const { note, folder } = action.payload;
          
            // Update the folder of the note in state.notes
            const noteInNotes = state.notes.find((n) => n.id === note.id);
            if (noteInNotes) {
              noteInNotes.folder = folder;
            }
          
            // Update the folder of the note in state.recentNotes
            const noteInRecent = state.recentNotes.find((n) => n.id === note.id);
            if (noteInRecent) {
              noteInRecent.folder = folder;
            }
          
            // Add the note to the folder's notes array in state.folders
            const folderInState = state.folders.find((f) => f.id === folder.id);
            if (folderInState) {
              // Prevent duplicates
              const alreadyExists = folderInState.notes.some((n) => n.id === note.id);
              if (!alreadyExists) {
                folderInState.notes = [note, ... folderInState.notes];
              }
            }

            if(state.selectedNote && state.selectedNote?.id === note.id) {
                state.selectedNote.folder = folder;
            }

            if(state.selectedFolder && state.selectedFolder.id === folder.id){
                state.selectedFolder.notes = [note, ...state.selectedFolder.notes]
            }
        },
        setNoteFolder: (state, action: PayloadAction<{ noteId: string; folderId: string }>) => {
            const { noteId, folderId } = action.payload;
          
            // Find the full folder object in state
            const folder = state.folders.find(f => f.id === folderId);
            console.log("state folder", folder?.name);
            if (!folder) return; // early exit if folder not found
          
            // Update the folder of the target note in notes[]
            const note = state.notes.find(n => n.id === noteId);
            console.log("state note", note);
            if (note) {
              note.folder = folder;
            }
          
            // Also update the selected note if it matches
            if (state.selectedNote?.id === noteId) {
                console.log("state selected note", state.selectedNote.title);
                state.selectedNote.folder = folder;
            }
        },
        setSelectedNote: (state, action: PayloadAction<Note | null>) => {
            state.selectedNote = action.payload;
        },
        setSelectedFolder: (state, action: PayloadAction<Folder | null>) => {
            state.selectedFolder = action.payload;
        },
        setSelectedFolderTitle : (state, action: PayloadAction<string>) => {
            state.selectedFolder!.name = action.payload
        },
        setSelectedFolderDescription : (state, action: PayloadAction<string>) => {
            state.selectedFolder!.description = action.payload
        },
        addNotesToFolder: (state, action: PayloadAction<Note[]>) => {
            if (state.selectedFolder && Array.isArray(state.selectedFolder.notes)) {
                state.selectedFolder.notes.push(...action.payload);
            }
        },
        setSearchQuery: (state, action: PayloadAction<string>) => {
            state.searchQuery = action.payload;
        },
        setNoteContent: (state, action: PayloadAction<{noteId: string, content:string}>) => {
            const note = state.notes.find(f => f.id === action.payload.noteId);
            if(!note) return;
            note!.content = action.payload.content;
        },
        setIsQuerying : (state, action: PayloadAction<boolean> ) => {
            state.isQuerying = action.payload;
        },
        setIsSaving : (state, action: PayloadAction<boolean>) => {
            state.isSaving = action.payload;
        },
        setSummarized : (state, action: PayloadAction<GeneratedResponse> ) => {
            if(state.selectedNote){
                state.selectedNote.summary = action.payload.summary;
                state.selectedNote.keywords = action.payload.keywords;
                state.selectedNote.topics = action.payload.topics;
            }
        }
    }
})

export const { 
    setNotes, 
    setFolders, 
    setSelectedNote, 
    setSelectedFolder, 
    setSearchQuery, 
    setNoteContent, 
    setIsQuerying, 
    setIsSaving, 
    addNote,
    setSummarized,
    setSelectedFolderTitle,
    setSelectedFolderDescription,
    addNotesToFolder,
    removeNote,
    removeNoteFromFolder,
    addNoteToFolder,
    setNoteFolder
} = folderNoteSlice.actions;

export default folderNoteSlice.reducer;