import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface RestoreNoteRequest {
    noteId: string;
}

export interface RestoreNoteResponse {
    noteId: string;
    title: string;
}

const restoreNote = async (payload: RestoreNoteRequest) : Promise<RestoreNoteResponse> => {
    const response = await api.post<RestoreNoteResponse>(`api/notes/${payload.noteId}/restore`);

    return response.data;
}

export const useRestoreNote = () => useMutation({
    mutationFn: restoreNote
});