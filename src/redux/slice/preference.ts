import { createSlice } from "@reduxjs/toolkit";

interface PreferenceState {
    isNoteGrid: boolean;
    isDarkMode: boolean
}

const initialState : PreferenceState = {
    isNoteGrid: true,
    isDarkMode: false
}

const preferenceSlice = createSlice({
    name: "preference",
    initialState,
    reducers: {
        toggleNoteGrid : (state) => {
            state.isNoteGrid = !state.isNoteGrid;
        }
    }
})

export const {
    toggleNoteGrid
} 
= preferenceSlice.actions;
export default preferenceSlice.reducer;