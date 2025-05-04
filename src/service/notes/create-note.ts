import { mockedCreatedNote } from "@/data/mockData"
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
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("mocking create note with ", payload.title);
            const response : CreateNoteResponse = {
                note: mockedCreatedNote
            };
            resolve(response.note);
        }, 300 * Math.random())
    })
}

export const useCreateNote = () => {
    return useMutation({
        mutationFn: createNote
    })
}

