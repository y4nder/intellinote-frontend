import { Entity } from ".";
import { UserProfileSchemaType } from '../service/shared/schema';

export type User = Entity<{
    email: string;
    userProfile? : UserProfileSchemaType
}>


