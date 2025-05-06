import { api } from "@/lib/axios";
import { Folder } from "@/types/folder";
import { useQuery } from "@tanstack/react-query";

export interface GetUseFolderResponse {
    folder: Folder
}

const getUserFolder = async (folderId: string): Promise<Folder> => {
    const response = await api.get<GetUseFolderResponse>(`/api/folders/${folderId}`);
    return response.data.folder;
}

export const useGetUserFolder = (folderId: string) => 
    useQuery({
        queryKey: ["user-folders", folderId],
        queryFn: () => getUserFolder(folderId)
    })