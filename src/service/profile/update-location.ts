import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { UpdateLocationSchemaType, UserProfileSchemaType } from "../shared/schema";

const updateLocation = async (data: UpdateLocationSchemaType): Promise<UserProfileSchemaType>  => {
  const response = await api.post<UserProfileSchemaType>("/api/profile/location", data);
  return response.data;
};

export const useUpdateLocation = () => useMutation({
  mutationFn: updateLocation,
});
