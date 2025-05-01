import { useEffect } from "react";
import { socket } from "@/lib/socket";

export const useDisasterSocket = () => {
  useEffect(() => {
    const onInstruction = (payload: { instruction: string }) => {
      console.log("🚨 New instruction:", payload.instruction);
        alert("instruction received")
    };

    socket.on("disaster:instruction", onInstruction);

    return () => {
      socket.off("disaster:instruction", onInstruction);
    };
  }, []);
};
