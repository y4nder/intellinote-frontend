import { api } from "@/lib/axios";
import { FilteredView } from "@/redux/slice/views";
import { ViewResponse } from "./create-user-view";
import { FilterCondition } from "@/app/pages/(root)/main/(home)/smart-views/filter-utils";
import { useQuery } from "@tanstack/react-query";

const getUserView = async (viewId: string) : Promise<FilteredView> => {
    const {data} = await api.get<ViewResponse>(`/api/views/${viewId}`);

    const { id, name, filterCondition} = data;

    const parsedFilteredCondition = JSON.parse(filterCondition) as FilterCondition[];
    const filteredView : FilteredView = {
        id,
        name,
        conditions : parsedFilteredCondition
    }

    return filteredView;
}

export const useGetUserView = (viewId: string) => {
    return useQuery({
        queryKey: ["views", viewId],
        queryFn: () => getUserView(viewId)
    });
}