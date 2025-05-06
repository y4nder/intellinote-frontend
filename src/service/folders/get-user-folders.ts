import { api } from "@/lib/axios";
import { Folder } from "@/types/folder";
import { useQuery } from "@tanstack/react-query";

export interface GetFoldersResponse {
    folders: Folder[];
}

const getUserFolders = async () : Promise<GetFoldersResponse> => {
    const response = await api.get<GetFoldersResponse>("/api/folders");
    return response.data;
}

export const useGetUserFolders = () => {
    return useQuery({
        queryKey: ["user-folders"],
        queryFn: getUserFolders
    })
}