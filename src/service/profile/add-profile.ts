import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import {  UserProfileSchemaType } from "../shared/schema";

const addProfile = async (data: UserProfileSchemaType): Promise<UserProfileSchemaType> => {
  const response = await api.post<UserProfileSchemaType>("/api/profile", data);
  return response.data;
}

export const useAddProfile = () => useMutation({
  mutationFn: addProfile
});