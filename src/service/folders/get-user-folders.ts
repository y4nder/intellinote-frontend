import { api } from "@/lib/axios";
import { Folder } from "@/types/folder";
import { useQuery } from "@tanstack/react-query";


export interface GetUserFolderParams {
    term?: string| null;
    skip: number
    take: number
}

export interface GetFoldersResponse {
    folders: Folder[];
    totalCount: number;
}

export const getUserFolders = async ({term, skip = 0, take = 10}: GetUserFolderParams) : Promise<GetFoldersResponse> => {
    const query = new URLSearchParams();
    if (term) query.append("term", term);
    query.append("skip", skip.toString());
    query.append("take", take.toString());

    const response = await api.get<GetFoldersResponse>(`/api/folders?${query.toString()}`);
    return response.data;
}

export const useGetUserFolders = (params: GetUserFolderParams) => {
    return useQuery({
        queryKey: ["user-folders"],
        queryFn: () => getUserFolders(params)
    })
}