// import { mockGetUserResponse } from "@/data/mockData";
import { api } from "@/lib/axios";
import { GetUserNotesResponse } from "@/types/note";
import { useQuery } from "@tanstack/react-query";

// const getUserNotesMock = (): Promise<GetUserNotesResponse> => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(mockGetUserResponse);
//       }, 800 * Math.random());
//     });
// };

export interface GetUserNotesParams {
  term?: string| null;
  skip: number
  take: number
}


const getUserNotes = async ({ term, skip = 0, take = 10 }: GetUserNotesParams): Promise<GetUserNotesResponse> => {
  const query = new URLSearchParams();
  if (term) query.append("term", term);
  query.append("skip", skip.toString());
  query.append("take", take.toString());

  const response = await api.get<GetUserNotesResponse>(`/api/notes?${query.toString()}`);
  return response.data;
};

  
  
export const useGetUserNotes = (params: GetUserNotesParams = { skip: 0, take: 10 }) => {
  return useQuery<GetUserNotesResponse>({
    queryKey: ["user-notes", params],
    queryFn: () => getUserNotes(params),
  });
};