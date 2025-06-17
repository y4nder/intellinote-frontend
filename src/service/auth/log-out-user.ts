import { api } from "@/lib/axios"
import { useMutation } from "@tanstack/react-query";

const logOut = async ()  : Promise<void> => {
    await api.post("/api/auth/logout-user");
}

export const useLogOut = () => {
    return useMutation({
        mutationFn: logOut
    })
};