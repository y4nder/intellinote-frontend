// import { mockedCreatedNote } from "@/data/mockData"
import { api } from "@/lib/axios"
import { Note } from "@/types/note"
import { useMutation } from "@tanstack/react-query"

export interface CreateNoteRequest {
    title: string,
    content: string
}

export interface CreateNoteResponse {
    note: Note
}

const createNote = async(payload: CreateNoteRequest) : Promise<Note> => {
    const {title, content} = payload;
    const response = await api.post<CreateNoteResponse>("/api/notes", {
        title, content
    });
    return response.data.note;
}

export const useCreateNote = () => {
    return useMutation({
        mutationFn: createNote
    })
}

