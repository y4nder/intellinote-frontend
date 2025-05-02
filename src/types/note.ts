import { Tag } from "./tag";

export interface Note {
    id: string;
    title: string;
    content: string;
    tags: Tag[];
    createdAt: string;
}