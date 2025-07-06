"use client";

import { LoginForm } from "@/features/auth/components/LoginForm";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginUser } from "@/features/auth/services/authService"; // ✅ import real login service
import TokenService from "@/lib/services/tokenService"; // optional if you want to confirm storage

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError("");

    try {
      // ✅ Call actual login API
      await loginUser(email, password);

      // Optional: Confirm access token is saved
      console.log("Access Token:", TokenService.getAccessToken());

      // ✅ Redirect to dashboard
      router.push("/dashboard");
    } catch (err: any) {
      const message =
        err?.response?.data?.message ||
        err?.message ||
        "Login failed. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Shipment System</h2>
          <p className="mt-2 text-sm text-gray-600">Sign in to your account</p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {error && (
            <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          <LoginForm onLogin={handleLogin} isLoading={isLoading} />

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Demo Credentials
                </span>
              </div>
            </div>

            <div className="mt-4 text-center text-sm text-gray-600">
              <p>Email: demo@example.com</p>
              <p>Password: any password</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
