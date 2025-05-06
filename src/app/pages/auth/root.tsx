import { Outlet, useNavigate, 
  // useNavigate 
} from "react-router-dom";
import AuthLayout from "@/components/layouts/auth";
import { useGetCurrentUser } from "@/service/auth/get-current.user";
import { useEffect } from "react";


const AuthRoot = () => {  
  const { data, error} = useGetCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      console.log("has data, navigating to dashboard", data);
      navigate("/");
    } else if (error) {
      console.error("no data or error, stay on login");
      navigate("/auth/login");
    }
  }, [data, error, navigate]);

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
}

export default AuthRoot;
