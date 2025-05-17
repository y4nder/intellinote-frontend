import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface SoftDeleteRequest {
    noteId: string;
}

export interface SoftDeleteResponse {
    noteId: string;
}

const softDelete = async (payload: SoftDeleteRequest) : Promise<SoftDeleteResponse> => {
    const { noteId } = payload;
    const response = await api.post<SoftDeleteResponse>(`/api/notes/${noteId}/soft-delete`);

    return response.data;
}

export const useSoftDelete = () => useMutation({
    mutationFn: softDelete
});