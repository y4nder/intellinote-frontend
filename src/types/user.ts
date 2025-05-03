import { Entity } from ".";


export type User = Entity<{
    email?: string;
    userName: string;
    roles?: string[]
}>


