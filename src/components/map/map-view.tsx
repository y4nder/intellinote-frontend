import { useState, useEffect, useRef } from "react"
import mapboxgl from "mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"
import { DisasterAlertResponse } from "@/service/shared/schema"
import { useGetAllAlerts } from "@/service/alert/get-all-alert"



interface MapComponentProps {
  onMapClick: (latitude: number, longitude: number) => void
}

export default function MapComponent({ onMapClick }: MapComponentProps) {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  const [mapboxToken, setMapboxToken] = useState<string>("")
  const [alerts, setAlerts] = useState<DisasterAlertResponse[]>([])
  const markersRef = useRef<{ [id: string]: mapboxgl.Marker }>({})
  const popupRef = useRef<mapboxgl.Popup | null>(null)
  const {data: activeAlerts} = useGetAllAlerts();
  

  useEffect(() => {
    if (activeAlerts) {
      setAlerts(activeAlerts);
    }
  }, [activeAlerts]);

  // Set the mapbox token from environment variable
  useEffect(() => {
    const token = import.meta.env.VITE_MAPBOX_TOKEN as string;
    setMapboxToken(token)

    // Set the access token for mapbox-gl
    if (token) {
      mapboxgl.accessToken = token
    }
  }, [])

  
  // Initialize map when component mounts
  useEffect(() => {
    if (!mapContainer.current || !mapboxToken) return
  
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords
  
        map.current = new mapboxgl.Map({
          container: mapContainer.current!,
          center: [longitude, latitude],
          zoom: 13,
        })
  
        map.current.addControl(new mapboxgl.NavigationControl(), "top-right")
  
        map.current.on("click", (e) => {
          onMapClick(e.lngLat.lat, e.lngLat.lng)
        })
      },
      () => {
        map.current = new mapboxgl.Map({
          container: mapContainer.current!,
          center: [-122.4, 37.8],
          zoom: 12,
        })
  
        map.current.addControl(new mapboxgl.NavigationControl(), "top-right")
  
        map.current.on("click", (e) => {
          onMapClick(e.lngLat.lat, e.lngLat.lng)
        })
      }
    )
  
    return () => {
      if (map.current) {
        map.current.remove()
        map.current = null
      }
    }
  }, [mapboxToken, onMapClick])
  

  // Update map style when theme changes
  // useEffect(() => {
  //   if (map.current) {
  //     map.current.setStyle(theme === "dark" ? "mapbox://styles/mapbox/dark-v11" : "mapbox://styles/mapbox/streets-v12")
  //   }
  // }, [theme])

  useEffect(() => {
    if (!map.current) return;
  
    // Clear existing markers
    Object.values(markersRef.current).forEach((marker) => marker.remove());
    markersRef.current = {};
  
    // Add new markers
    alerts.forEach((alert) => {
      const el = document.createElement("div");
      el.className = "marker";
      el.style.width = "36px";
      el.style.height = "36px";
      el.style.borderRadius = "50%";
      el.style.backgroundColor = getSeverityColor(alert.severity);
      el.style.display = "flex";
      el.style.alignItems = "center";
      el.style.justifyContent = "center";
      el.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
      el.style.cursor = "pointer";
      el.style.transition = "transform 0.2s ease";
  
      const icon = document.createElement("div");
      icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>`;
      el.appendChild(icon);
  
      const marker = new mapboxgl.Marker(el)
        .setLngLat([alert.longitude, alert.latitude])
        .addTo(map.current!);
  
      marker.getElement().addEventListener("click", (e) => {
        e.stopPropagation();
  
        if (popupRef.current) {
          popupRef.current.remove();
        }
  
        popupRef.current = new mapboxgl.Popup({
          closeButton: true,
          closeOnClick: true,
          maxWidth: "320px",
        })
          .setLngLat([alert.longitude, alert.latitude])
          .setHTML(`
            <div class="p-2 text-sm font-sans">
              <div class="mb-1 flex items-center gap-2">
                <div class="h-3 w-3 rounded-full" style="background-color: ${getSeverityColor(alert.severity)}"></div>
                <h3 class="font-semibold text-base">${alert.type}</h3>
                <span class="ml-auto text-xs text-muted-foreground">
                  ${new Date(alert.createdAt).toLocaleDateString()}
                </span>
              </div>
              <p class="mb-1 text-gray-800">${alert.description}</p>
              ${alert.locationName ? `<p class="text-xs text-gray-500">📍 ${alert.locationName}</p>` : ""}
              ${alert.affectedRadius ? `<p class="text-xs text-gray-500">📏 ${alert.affectedRadius} km radius</p>` : ""}
            </div>
          `)
          .addTo(map.current!);
      });
  
      markersRef.current[alert.id] = marker;
    });
  
    return () => {
      Object.values(markersRef.current).forEach((marker) => marker.remove());
      if (popupRef.current) popupRef.current.remove();
    };
  }, [alerts]);
  
  

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "High":
        return "#ef4444" // red-500
      case "Medium":
        return "#f97316" // orange-500
      case "Low":
        return "#eab308" // yellow-500
      default:
        return "#3b82f6" // blue-500
    }
  }

  if (!mapboxToken) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-slate-900 text-white">
        <p>Mapbox token is required. Please set the NEXT_PUBLIC_MAPBOX_TOKEN environment variable.</p>
      </div>
    )
  }

  return <div ref={mapContainer} className="h-full w-full" />
}
