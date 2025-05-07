import { api } from "@/lib/axios";
import { Note } from "@/types/note";
import { useMutation } from "@tanstack/react-query";

export interface UpdateFolderActionRequest {
    folderId: string;
    noteIds: string[];
    actionType: "add"| "delete"
}

export interface UpdateFolderActionResponse {
    message: string;
    folderId: string;
    notes: Note[];
}

const updateFolderAction = async (payload: UpdateFolderActionRequest) : Promise<UpdateFolderActionResponse> => {
    const {actionType, noteIds, folderId} = payload;
    const response = await api.post<UpdateFolderActionResponse>(
        `/api/folders/${folderId}/action?type=${actionType}`,{noteIds}
    );
    return response.data;
}

export const useUpdateFolderAction = () => {
    return useMutation({
        mutationFn: updateFolderAction
    })
}