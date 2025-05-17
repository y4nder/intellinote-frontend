// import { mockChatResponses } from "@/data/mockData";
import { api } from "@/lib/axios";
import { FolderCitation, NoteCitation } from "@/types/chatMessage";
import { useMutation } from "@tanstack/react-query";

export interface PromptRequest{
    threadId? : string;
    promptMessage: string;
    promptContext: PromptContext;
}

export interface PromptContext{
    noteId?: string;
    folderId?: string;
}

export interface PromptResponse {
    threadId: string;
    responseMessage: string;
    noteCitations?: NoteCitation[]
    folderCitations? : FolderCitation[]
}


const sendChatMessage = async (payload: PromptRequest) : Promise<PromptResponse> => {
    const response = await api.post<PromptResponse>("/api/nora/chat", {
        ...payload
    })
    return response.data;
}

// const sendChatMessageMock = async (payload: PromptRequest) : Promise<PromptResponse> => {
//     console.log("sending mock chat prompt: ", payload);
//     const randomIndex = Math.floor(Math.random() * mockChatResponses.length);
//     const mockResponse = mockChatResponses[randomIndex];
  
//     return new Promise(resolve => {
//       setTimeout(() => {
//         resolve(mockResponse);
//       }, 1000);
//     });
// }

// done set to proper function
export const useSendChatMessage = () => {
    return useMutation({
        mutationFn: sendChatMessage
    })
}

