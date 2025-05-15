import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";

export interface CreateMindMapRequest {
    noteId : string;
}

export interface CreateMindMapResponse {
    mindMap : string;
}

const createMindmap = async (payload: CreateMindMapRequest) : Promise<string> => {
    const response = await api.post<CreateMindMapResponse>("/api/mindmaps",{
        ...payload
    });

    const { mindMap } = response.data;

    return mindMap;
}

export const useCreateMindmap = () => useMutation({
    mutationFn: createMindmap
});

