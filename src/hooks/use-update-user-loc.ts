import { useEffect } from "react";
import { useUpdateLocation } from "@/service/profile/update-location";

export const useUpdateUserLocation = () => {
  const { mutate } = useUpdateLocation();

  useEffect(() => {
    if (!navigator.geolocation) return;

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        mutate({
          latitude: pos.coords.latitude,
          longitude: pos.coords.longitude,
        });
      },
      (err) => {
        console.error("Error getting location:", err);
      }
    );
  }, [mutate]);
};
