// import { mockApiCallNote } from "@/data/mockData";
import { api } from "@/lib/axios";
import { UpdateNoteResponse, UpdateNoteResponseParsed } from "@/types/note";
import { PartialBlock } from '@blocknote/core';
import { useMutation} from "@tanstack/react-query";


export interface UpdateNoteRequest{
    noteId: string,
    title?: string,
    content?: string,
    summary?: string
}

// const updateNoteMock = async (payLoad: UpdateNoteRequest): Promise<UpdateNoteResponseParsed> => {    
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log("mocking update note with: ", payLoad.noteId);
//             const response : UpdateNoteResponse = mockApiCallNote(payLoad.noteId)!;
//             const noteParsed : UpdateNoteResponseParsed = {
//                 note: response.note,
//                 content: (JSON.parse(response.note!.content!) as PartialBlock[])
//             }
//             resolve(noteParsed);
//         }, 1000 * Math.random())
//     })
// }

const updateNote = async (payLoad: UpdateNoteRequest): Promise<UpdateNoteResponseParsed> => {
    const { noteId, title, content, summary } = payLoad;
    const response = await api.put<UpdateNoteResponse>(`/api/notes/${noteId}`, {
        title,
        content,
        summary,
    });

    const noteParsed: UpdateNoteResponseParsed = {
        note: response.data.note,
        content: JSON.parse(response.data.note!.content!) as PartialBlock[],
    };
    return noteParsed;
}

// todo call api instead of mock
export const useUpdateNote = () => {
    return useMutation({
        mutationFn: updateNote
    })
}

