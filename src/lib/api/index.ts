import axiosInstance from "./axios";

const api = {
  get: <T>(url: string, params?: Record<string, unknown>) =>
    axiosInstance.get<T>(url, { params }).then((res) => res.data),

  post: <T>(url: string, data?: Record<string, unknown>) =>
    axiosInstance.post<T>(url, data).then((res) => res.data),

  put: <T>(url: string, data?: Record<string, unknown>) =>
    axiosInstance.put<T>(url, data).then((res) => res.data),

  patch: <T>(url: string, data?: Record<string, unknown>) =>
    axiosInstance.patch<T>(url, data).then((res) => res.data),

  delete: <T>(url: string) =>
    axiosInstance.delete<T>(url).then((res) => res.data),
};

export default api;
