import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export interface LocationIQResponse {
  display_name: string
  address: {
    road?: string
    neighbourhood?: string
    city?: string
    region?: string
    postcode?: string
    country?: string
    [key: string]: any
  }
}

export const getAddressFromCoordinates = async (
  lat: number,
  lon: number
): Promise<LocationIQResponse> => {
  const apiKey = import.meta.env.VITE_LOCATIONIQ_API_KEY
  const url = `https://us1.locationiq.com/v1/reverse?key=${apiKey}&lat=${lat}&lon=${lon}&format=json`

  const response = await axios.get<LocationIQResponse>(url)
  return response.data
}

export const useReverseGeocoding = (lat: number, lon: number) => useQuery({
    queryKey: ["reverse-geocoding"],
    queryFn: () => getAddressFromCoordinates(lat, lon), 
})