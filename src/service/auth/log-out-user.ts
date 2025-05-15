import { api } from "@/lib/axios"
import { logoutUser } from "@/redux/slice/auth";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const logOut = async ()  : Promise<void> => {
    await api.post("/api/auth/logout-user");
}

export const useLogOut = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return useMutation({
        mutationFn: logOut,
        onSuccess: () => {            
            dispatch(logoutUser());
            navigate("/auth/login")
        }
    })
};