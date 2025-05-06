import { Note } from "./note";
import { User } from "./user";

export interface Folder {
    id: string;
    name: string;
    description: string;
    noteCount?: number;
    author: User;
    notes: Note[];
    keywords: string[];
    createdAt: string;
    updatedAt: string;
}

