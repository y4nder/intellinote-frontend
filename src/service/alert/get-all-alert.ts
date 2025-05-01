import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import {
  DisasterAlertResponse,
} from "../shared/schema";

const getAllAlerts = async (): Promise<DisasterAlertResponse[]> => {
  const response = await api.get<DisasterAlertResponse[]>("/api/alerts");
  return response.data;
};

export const useGetAllAlerts = () =>
  useQuery({
    queryKey: ["alerts"],
    queryFn: getAllAlerts,
  });