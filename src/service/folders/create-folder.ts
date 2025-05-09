import { api } from "@/lib/axios";
import { Folder } from "@/types/folder";
import { useMutation } from "@tanstack/react-query";

export interface CreateFolderRequest {
    name: string;
    description? : string | null;
    noteIds : string[];
    auto: boolean
}

export interface CreateFolderResponse {
    folder:Folder,
    isGenerating: boolean
}

const createFolder = async(payload: CreateFolderRequest) : Promise<CreateFolderResponse> => {
    const response = await api.post<CreateFolderResponse>("/api/folders", {
        ...payload,
    })
    return response.data;
}

export const useCreateFolder = () => {
    return useMutation({
        mutationFn: createFolder
    });
}