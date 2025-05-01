import Axios from "axios";

export const api = Axios.create({
    //  baseURL: "http://localhost:3000",
    baseURL: "https://1cz2hd3b-3000.asse.devtunnels.ms",
    withCredentials: true
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage (or sessionStorage)
    const token = localStorage.getItem("authToken");
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
