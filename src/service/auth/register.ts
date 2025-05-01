import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";


export const registerSchema = z.object({
    email: z.string(),
    password: z.string().min(5, {
        message: "Password must have at least 5 characters"
    }),
    confirmPassword: z.string().min(5, {
        message: "Password must have at least 5 characters"
    })
})

export type RegisterSchema = z.infer<typeof registerSchema>;

const register = async (data: RegisterSchema) => {
    const response = await api.post("/api/auth/register", data);
    return response.data;
}

export const useRegister = () => useMutation({
    mutationFn: register
});


