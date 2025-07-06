import api from "@/lib/api";
import TokenService from "@/lib/services/tokenService";

interface LoginResponse {
  success: boolean;
  data: string; // ✅ token string directly in data
  message: string;
  errors: string[];
}

export const loginUser = async (email: string, password: string) => {
  const res = await api.post<LoginResponse>("api/auth/login", {
    email,
    password,
  });

  if (res.success && res.data) {
    TokenService.setAccessToken(res.data); // ✅ store the token
  } else {
    throw new Error(res.message || "Login failed");
  }
};
