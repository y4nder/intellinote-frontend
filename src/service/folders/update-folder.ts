import { api } from "@/lib/axios";
import { Folder } from "@/types/folder";
import { useMutation } from "@tanstack/react-query";

export interface UpdateFolderRequest {
    folderId: string;
    name?: string;
    description?: string;
}

export interface UpdateFolderResponse {
    folder: Folder
}

const updateFolder = async (payload: UpdateFolderRequest) : Promise<UpdateFolderResponse> => {
    const { folderId, name, description }  = payload;

    const response =  await api.put<UpdateFolderResponse>(`api/folders/${folderId}`,{
        name, description
    });
    return response.data;
}

export const useUpdateFolder = () => {
    return useMutation({
        mutationFn: updateFolder
    });
}