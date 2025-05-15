import { RemoveKey, StoreKey } from "@/lib/local-stores";
import { SignInResponse } from "@/service/auth/login";
import { User } from "@/types/user";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface AuthState {
    user: User | null;
    auth: SignInResponse | null;
}

const initialState: AuthState = {
    user: null,
    auth: null,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser: (state, action: PayloadAction<SignInResponse>) => {
            state.auth = action.payload;
            StoreKey(action.payload);
        },
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        logoutUser: (state) => {
            RemoveKey();
            state.user = null;
            state.auth = null;
        }
    }
})

export const { loginUser, logoutUser, setUser } = authSlice.actions;
export default authSlice.reducer;
