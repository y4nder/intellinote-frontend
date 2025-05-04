import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { z } from "zod";

export const loginSchema = z.object({
    email: z.string(),
    password: z.string().min(5, {
        message: "Password must have at least 5 characters"
    }),
    useCookie: z.boolean().default(true)
})

export type SignInSchema = z.infer<typeof loginSchema>;
export type SignInResponse = {
    token_type: string;
    access_token?: string | null; 
    expires_in: number;
    refresh_token?: string | null;
}


const signIn = async (data: SignInSchema) : Promise<SignInResponse> => {
    const response = await api.post<SignInResponse>(`/api/auth/signin?useCookie=${data.useCookie}`, data);
    return response.data;
}


export const useSignIn = () => useMutation({
    mutationFn: signIn
});


// const simulatedLogin = async (data: LoginSchema): Promise<LoginResponse> => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({
//                 token: "mocked-jwt-token-1234567890",
//                 user: {
//                     id: "user-123",
//                     email: data.email,
//                     name: "Jane Doe",
//                     createdAt: new Date(),
//                     updatedAt: new Date(),
//                 },
//             });
//         }, 300);
//     });
// };