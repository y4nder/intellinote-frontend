import { FilterCondition } from "@/app/pages/(root)/main/(home)/smart-views/filter-utils";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface FilteredView {
    id?: string;
    name: string;
    conditions: FilterCondition[]
}

interface ViewsState {
    views: FilteredView[]
    selectedView: FilteredView | null
}

const initialState : ViewsState = {
    views: [],
    selectedView: null
}

const viewSlice = createSlice({
    name: "views",
    initialState,
    reducers: {
        addView : (state, action: PayloadAction<FilteredView>) => {
            state.views.push(action.payload);
        },
        setSelectedView : (state, action: PayloadAction<FilteredView | null>) => {
            state.selectedView = action.payload
        },
        updateView: (state, action: PayloadAction<FilteredView>) => {
            const updated = action.payload;
            const idx = state.views.findIndex(v => v.id === updated.id);
            if (idx !== -1) {
              // Replace the existing view with the updated one
              state.views[idx] = updated;
            }
            if(state.selectedView?.id === updated.id) {
                state.selectedView = updated;
            }
        },
        setViews : (state, action: PayloadAction<FilteredView[]>) => {
            state.views = action.payload
        }
    }
});

export const {
    addView,
    setSelectedView,
    updateView,
    setViews
} = viewSlice.actions

export default viewSlice.reducer;