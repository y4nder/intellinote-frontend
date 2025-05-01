import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { UserProfileSchemaType } from "../shared/schema";

const getProfile = async (): Promise<UserProfileSchemaType> => {
  const response = await api.get("/api/profile");
  return response.data;
};

export const useGetProfile = () => useQuery({
  queryKey: ["profile"],
  queryFn: getProfile,
});
