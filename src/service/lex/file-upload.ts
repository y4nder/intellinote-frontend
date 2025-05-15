import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export interface UploadFileResponse {
    id: string;
    object: string;
    created_at: number;
    filename: string;
    purpose: string;
}

const uploadFile = async (payload: FormData) : Promise<UploadFileResponse> => {
    const response = await axios.post<UploadFileResponse>("https://api.openai.com/v1/files", payload, {
        headers: {
            "Authorization" : `Bearer ${import.meta.env.VITE_OPEN_AI_KEY}`
        }
    })

    return response.data;
}

export const useUploadFile = () => {
    return useMutation({
        mutationFn: uploadFile
    })
};