import { FilterCondition } from "@/app/pages/smart-views/filter-utils";
import { api } from "@/lib/axios";
import { FilteredView } from "@/redux/slice/views";
import { useQuery } from "@tanstack/react-query";

export interface ViewResponse {
    id: string;
    name:string;
    filterCondition: string;
}

export interface GetUserViewResponse {
    views: ViewResponse[];
}



const getUserViews = async () : Promise<FilteredView[]> => {
    const response = await api.get<GetUserViewResponse>("/api/views");
    const { views } = response.data;

    let filteredViews : FilteredView[] = [];

    views.forEach(view => {
        const { id, name, filterCondition} = view
        const parsedFilteredCondition = JSON.parse(filterCondition) as FilterCondition[];
        const filterdView : FilteredView = {
            id,
            name,
            conditions : parsedFilteredCondition
        }
    
        filteredViews.push(filterdView);
    });

    return filteredViews;
}

export const useGetUserViews = () => 
    useQuery({
        queryKey: ["views"],
        queryFn: getUserViews
    })

