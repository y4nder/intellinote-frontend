import { SignInResponse } from "@/service/auth/login";
import { AUTH_KEY } from "./constants"

export const GetAuthKey = () => {
    const item = localStorage.getItem(AUTH_KEY);
    if (!item) return null;

    try {
        return JSON.parse(item) as SignInResponse;
    } catch (error) {
        console.error("Failed to parse auth key:", error);
        return null;
    }
}

export const StoreKey = (item: SignInResponse) => {
    localStorage.setItem(AUTH_KEY, JSON.stringify(item));
}