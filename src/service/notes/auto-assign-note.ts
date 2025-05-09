import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface AssignNoteFolderResponse {
    scores: FolderScore[];
}

export interface FolderScore {
    folderId: string;
    folderName: string;
    score: number;
}

const autoAssignNote = async (noteId: string) : Promise<AssignNoteFolderResponse> => {
    const response = await api.post<AssignNoteFolderResponse>(`api/notes/${noteId}/assign`);
    return response.data;
}

export const useAutoAssignNote = () => {
    return useMutation({
        mutationFn: autoAssignNote
    })
}