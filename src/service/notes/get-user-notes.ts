import { mockGetUserResponse } from "@/data/mockData";
import { GetUserNotesResponse } from "@/types/note";
import { useQuery } from "@tanstack/react-query";

const getUserNotesMock = (): Promise<GetUserNotesResponse> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockGetUserResponse);
      }, 1000 * Math.random());
    });
};
  
  
export const useGetUserNotes = () => {
    return useQuery<GetUserNotesResponse>({
        queryKey: ["user-notes"],
        queryFn: getUserNotesMock
    });
};
  