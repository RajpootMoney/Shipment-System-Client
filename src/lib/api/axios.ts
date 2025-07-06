import axios, { AxiosError, AxiosInstance } from "axios";
import TokenService from "../services/tokenService";

const instance: AxiosInstance = axios.create({
  // baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  baseURL: "https://localhost:44332/",
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔐 Attach token to every request
instance.interceptors.request.use(
  (config) => {
    const token = TokenService.getAccessToken(); // abstracted
    if (token && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔁 Auto-refresh logic
instance.interceptors.response.use(
  (response) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as any;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      TokenService.getRefreshToken()
    ) {
      originalRequest._retry = true;
      try {
        const res = await axios.post(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh`,
          {
            refreshToken: TokenService.getRefreshToken(),
          }
        );
        TokenService.setAccessToken(res.data.accessToken);
        originalRequest.headers.Authorization = `Bearer ${res.data.accessToken}`;
        return instance(originalRequest);
      } catch (refreshError) {
        TokenService.clear();
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

export default instance;
