import { FilterCondition } from "@/app/pages/smart-views/filter-utils";
import { api } from "@/lib/axios";
import { FilteredView } from "@/redux/slice/views";
import { useMutation } from "@tanstack/react-query";

export interface CreateViewRequest {
    name: string;
    filterObject: string;
}

export interface ViewResponse {
    id: string;
    name: string;
    filterCondition: string;
}

const createView = async (payload: CreateViewRequest) : Promise<FilteredView> => {
    const response = await api.post<ViewResponse>("/api/views", {
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

export const useCreateView = () => useMutation({
    mutationFn: createView
})