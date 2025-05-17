// import { Keyword } from "./keyword";

import { PartialBlock } from "@blocknote/core";
import { Folder } from "./folder";
import { User } from "./user";

export interface Note {
    id: string;
    title: string;
    content?: string | null;
    summary?: string | null;
    createdAt: string;
    updatedAt: string | null;
    author?: User;
    folder?: Folder | null;
    keywords: string[];
    topics: string[];
    snippet?: BlockSnippet | null;
    mindmap? : string | null;
    isDeleted: boolean
}

export interface BlockSnippet {
    id: string;
    text: string;
}

export interface GetUserNotesResponse {
    notes: Note[];
    totalCount: number
}

export interface GetUserNoteResponse {
    note?: Note
}

export interface GetUserNoteResponseParsed {
    note? : Note,
    content : PartialBlock[]
}

export interface UpdateNoteResponse {
    note?: Note
}

export interface UpdateNoteResponseParsed {
    note? : Note,
    content : PartialBlock[]
}

