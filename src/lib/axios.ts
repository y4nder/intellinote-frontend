/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from "axios";

export const api = Axios.create({
    baseURL: "http://localhost:3000",
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

let isRefreshing = false;
let failedQueue: any[] = [];

const processQueue = (error: any) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve();
    }
  });

  failedQueue = [];
};

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry
    ) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({
            resolve: () => resolve(api(originalRequest)),
            reject: (err: unknown) => reject(err),
          });
        });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        // Call your refresh endpoint
        await Axios.post(
          "https://localhost:7050/api/auth/signin/refresh?useCookie=true",
          {},
          { withCredentials: true }
        );

        processQueue(null);

        // Retry original request after successful refresh
        return api(originalRequest);
      } catch (err) {
        processQueue(err);
        return Promise.reject(err);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(error);
  }
);
