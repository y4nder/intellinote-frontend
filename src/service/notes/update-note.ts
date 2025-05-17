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

// done call api instead of mock
export const useUpdateNote = () => {
    return useMutation({
        mutationFn: updateNote
    })
}

