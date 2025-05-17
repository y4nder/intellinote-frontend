import { Outlet, useNavigate } from "react-router-dom";
import AuthLayout from "@/components/layouts/auth";
import { useGetCurrentUser } from "@/service/auth/get-current.user";
import { useEffect } from "react";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";



const AuthRoot = () => {  
  const { data, error} = useGetCurrentUser();
  const {user} = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();
  

  useEffect(() => {
    if(!user){
      navigate("/auth/login");
      return;
    }
    if (data) {
      navigate("/");
    } else if (error) {
      navigate("/auth/login");
    }
  }, [data, error, navigate, user]);

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}

export default AuthRoot;
