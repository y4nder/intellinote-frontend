import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface PromptNoteCreationRequest {
    promptMessage: string;
    fileIds? : string[]
}

export interface LexResponse {
    noteId: string;
    title : string;
}

const autoCreateNote = async (payload: PromptNoteCreationRequest) : Promise<LexResponse> => {
    const response = await api.post<LexResponse>("/api/lex", {
        ...payload
    });

    return response.data;
}

export const useAutoCreateNote = () => {
    return useMutation({
        mutationFn: autoCreateNote
    })
}