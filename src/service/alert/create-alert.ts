import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import {
  CreateDisasterAlertInput,
  DisasterAlertResponse,
} from "../shared/schema";

const createAlert = async (data: CreateDisasterAlertInput): Promise<DisasterAlertResponse> => {
  const response = await api.post<DisasterAlertResponse>("/api/alerts", data);
  return response.data;
};  

export const useCreateAlert = () =>
  useMutation({
    mutationFn: createAlert,
  });