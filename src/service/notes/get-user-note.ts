import { mockApiCallNote } from "@/data/mockData";
import { GetUserNoteResponse } from "@/types/note";
import { useQuery } from "@tanstack/react-query";

const getUserNoteMock = async (noteId: string): Promise<GetUserNoteResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockApiCallNote(noteId)!);
      }, 1000 * Math.random());
    });
};

export const useGetUserNote = (noteId: string) => {
    return useQuery<GetUserNoteResponse>({
        queryKey: ["user-notes", noteId],
        queryFn: () => getUserNoteMock(noteId)
    });
};
  