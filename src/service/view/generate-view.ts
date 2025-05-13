import { api } from "@/lib/axios";
import { FilteredView } from "@/redux/slice/views";
import { ViewResponse } from "./create-user-view";
import { FilterCondition } from "@/app/pages/smart-views/filter-utils";
import { useMutation } from "@tanstack/react-query";


export interface GenerateViewRequest {
    query: string;
}

const generateView = async (payload: GenerateViewRequest) : Promise<FilteredView> => {
    const response = await api.post<ViewResponse>("/api/views/auto", {
        ...payload
    });

    const {id, name, filterCondition} = response.data;
    
        const parsedFilteredCondition = JSON.parse(filterCondition) as FilterCondition[];
    
        const filteredView : FilteredView  = {
            id, 
            name,
            conditions : parsedFilteredCondition
        }
    
    return filteredView;
}

export const useGenerateView = () => useMutation({
    mutationFn: generateView
});