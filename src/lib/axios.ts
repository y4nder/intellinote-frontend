/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from "axios";
import { GetAuthKey, StoreKey } from "./local-stores";
import { SignInResponse } from "@/service/auth/login";

const baseURL = "https://localhost:7050";
// const baseURL=  "https://wd0xffs1-7050.asse.devtunnels.ms",

export const api = Axios.create({
  baseURL,
  withCredentials: true
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    const authCredentials = GetAuthKey();

    if(authCredentials) {
      config.headers.Authorization = `${authCredentials.token_type} ${authCredentials.access_token}`;
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
        const authCredentials = GetAuthKey();
        if(!authCredentials) return;

        // const { token_type, access_token } = authCredentials;
        // console.log("refreshing with", access_token);
        const response = await Axios.post<SignInResponse>(
        `${baseURL}/api/auth/signin/refresh`,
          {},
          {
            // headers: {
            //   Authorization: `${token_type} ${access_token}`,
            //   'Content-Type': 'application/json',
            // },
            withCredentials: true
          }
        );
        StoreKey(response.data);
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
