import { GetPreferences, StorePreferences } from "@/lib/local-stores";
import { createSlice } from "@reduxjs/toolkit";

export interface PreferenceState {
    isNoteGrid: boolean;
}

const initialState : PreferenceState = GetPreferences() ?? {
    isNoteGrid : true
}

const preferenceSlice = createSlice({
    name: "preference",
    initialState,
    reducers: {
        toggleNoteGrid : (state) => {
            state.isNoteGrid = !state.isNoteGrid;
            StorePreferences(state);
        }
    }
})

export const {
    toggleNoteGrid
} 
= preferenceSlice.actions;
export default preferenceSlice.reducer;