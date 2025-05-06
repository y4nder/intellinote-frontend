// import { mockGetUserResponse } from "@/data/mockData";
import { api } from "@/lib/axios";
import { GetUserNotesResponse } from "@/types/note";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

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

export const useInfiniteGetUserNotes = (params: Omit<GetUserNotesParams, "skip">) => {
  return useInfiniteQuery({
    queryKey: ["user-notes", params.term], 
    queryFn: async ({ pageParam = 0 }) => {
      return await getUserNotes({ ...params, skip: pageParam, take: params.take || 10 });
    },
    getNextPageParam: (lastPage, allPages) => {
      const totalLoaded = allPages.reduce((sum, page) => sum + page.notes.length, 0);
      return totalLoaded < lastPage.totalCount ? totalLoaded : undefined;
    },
    initialPageParam: 0,
  });
};