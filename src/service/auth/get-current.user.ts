import { api } from "@/lib/axios";
import { useQuery } from "@tanstack/react-query";
import { User } from "@/types/user";


export interface WhoAmIResponse {
    email?: string;
    username: string;
    roles?: string[]
}


const getCurrentUser = async (): Promise<User> => {
    const response = await api.get<WhoAmIResponse>("/api/auth/whoami");
    const user : User = {
        id: "some id",
        email: response.data.email,
        userName: response.data.username,
        roles: response.data.roles
    }
    return user;
}

export const useGetCurrentUser = () =>
    useQuery({
        queryKey: ["current-user"],
        queryFn: () => getCurrentUser(),
    });
