import { api } from "@/lib/axios";
import { FilteredView } from "@/redux/slice/views";
import { ViewResponse } from "./create-user-view";
import { FilterCondition } from "@/app/pages/(root)/main/(home)/smart-views/filter-utils";
import { useMutation } from "@tanstack/react-query";

export interface UpdateViewRequest {
    viewId: string;
    name: string;
    filterObject: string;
}

const updateView = async (payload: UpdateViewRequest) : Promise<FilteredView> => {
    const {viewId, name, filterObject} = payload;
    const response = await api.put<ViewResponse>(`api/views/${viewId}`, {
        name, filterObject
    });
    
    const {id, name : responseName, filterCondition} = response.data;
    
    const parsedFilteredCondition = JSON.parse(filterCondition) as FilterCondition[];

    const filteredView : FilteredView  = {
        id, 
        name: responseName,
        conditions : parsedFilteredCondition
    }

    return filteredView;
}

export const useUpdateView = () => useMutation({
    mutationFn: updateView
})