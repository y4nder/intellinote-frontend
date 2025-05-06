import AppLayout from "@/components/layouts/app-layout";
import { setUser } from "@/redux/slice/auth";
import { useGetCurrentUser } from "@/service/auth/get-current.user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";


const AppRoot = () => {
  const {data: user, isError: isErrorNotes} = useGetCurrentUser();
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
    if(user){
      console.log("who am i response: ", user)
      dispatch(setUser(user));
    }

    if(isErrorNotes){
      console.error("error who am ai response: ", user)
      navigate("/auth/login") 
    }
  }, [user, dispatch, isErrorNotes, navigate])

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default AppRoot;
