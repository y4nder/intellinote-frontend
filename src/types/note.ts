// import { Keyword } from "./keyword";

import { Folder } from "./folder";
import { User } from "./user";

export interface Note {
    id: string;
    title: string;
    content?: string | null;
    summary?: string | null;
    createdAt: string;
    updatedAt: string;
    author?: User;
    folder?: Folder;
    keywords: string[];
    topics: string[];
}

export interface GetUserNotesResponse {
    notes: Note[];
    totalCount: number
}

export interface GetUserNoteResponse {
    note?: Note
}