import AppLayout from "@/components/layouts/app-layout";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { socket } from "@/lib/socket";

const AppRoot = () => {
  useEffect(() => {
    socket.connect();

    socket.on("connect", () => {
      console.log("🔌 Socket connected:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("❌ Socket disconnected");
    }); 

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <AppLayout>
      <Outlet />
    </AppLayout>
  );
};

export default AppRoot;
