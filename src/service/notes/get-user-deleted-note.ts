import { api } from "@/lib/axios";
import { GetUserNotesResponse } from "@/types/note";
import { useQuery } from "@tanstack/react-query";

const getUserDeletedNotes = async() : Promise<GetUserNotesResponse> => {
    const response = await api.get<GetUserNotesResponse>(`/api/notes/soft-delete`);
    return response.data;
}

export const useGetUserDeletedNotes = () => useQuery({
    queryKey: ["user-notes"],
    queryFn: getUserDeletedNotes
})