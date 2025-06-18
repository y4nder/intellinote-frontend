import { SignInResponse } from "@/service/auth/login";
import { AUTH_KEY, PREFERENCE_KEY } from "./constants"
import { PreferenceState } from "@/redux/slice/preference";

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

export const RemoveKey = () => {
    localStorage.removeItem(AUTH_KEY);
}

export const GetPreferences = () => {
    const item = localStorage.getItem(PREFERENCE_KEY);
    if(!item) return null;

    try {
        return JSON.parse(item) as PreferenceState
    } catch {
        return null;
    }
}

export const StorePreferences = (item: PreferenceState) => {
    localStorage.setItem(PREFERENCE_KEY, JSON.stringify(item));
}