import AppLayout from "@/components/layouts/app-layout";
import { loginUser } from "@/redux/slice/auth";
import { useGetCurrentUser } from "@/service/auth/get-current.user";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";


const AppRoot = () => {
  const {data, isError} = useGetCurrentUser();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
    if(data){
      console.log("who am i response: ", data)
      dispatch(loginUser(data))
    }

    if(isError){
      console.error("error who am ai response: ", data)
      navigate("/auth/login") 
    }
  }, [data, dispatch, isError, navigate])

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default AppRoot;
