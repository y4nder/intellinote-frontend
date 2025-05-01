import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import {
  DisasterAlertResponse,
} from "../shared/schema";

const getAlertById = async (id: string): Promise<DisasterAlertResponse> => {
  const response = await api.get<DisasterAlertResponse>(`/api/alerts/${id}`);
  return response.data;
};

export const useGetAlertById = (id: string) =>
  useQuery({
    queryKey: ["alert", id],
    queryFn: () => getAlertById(id),
    enabled: !!id,
  });