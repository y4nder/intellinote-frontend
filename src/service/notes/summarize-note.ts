import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface SummarizeNoteResponse {
    message: string;
    approved: boolean;
}

const summarizeNote = async (noteId: string): Promise<SummarizeNoteResponse> => {
    const response = await api.post<SummarizeNoteResponse>(`/api/notes/ai/${noteId}`);
    return response.data;
}

export const useSummarizeNote = () => {
    return useMutation({
        mutationFn: summarizeNote
    })
}
