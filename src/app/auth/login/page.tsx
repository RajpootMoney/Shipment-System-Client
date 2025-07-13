"use client";

import { LoginForm } from "@/features/auth/components/LoginForm";
import { SocialLoginButtons } from "@/features/auth/components/SocialLoginButtons";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { loginUser } from "@/features/auth/services/authService";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (email: string, password: string) => {
    setIsLoading(true);
    setError("");

    try {
      await loginUser(email, password);
      router.push("/dashboard");
    } catch (err: unknown) {
      const error = err as { response?: { data?: { message?: string } } };
      const message =
        error?.response?.data?.message || "Login failed. Please try again.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="max-w-4xl w-full px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Form */}
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-gray-900">
            Log into Navette
          </h2>
          <div className="mt-6">
            {error && (
              <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
                {error}
              </div>
            )}
            <LoginForm onLogin={handleLogin} isLoading={isLoading} />
          </div>
          <p className="text-xs mt-6 text-gray-400 text-center">
            Secure Login with reCAPTCHA.{" "}
            <a className="underline" href="#">
              Terms
            </a>{" "}
            &{" "}
            <a className="underline" href="#">
              Privacy
            </a>
          </p>
        </div>

        {/* Right Social Buttons */}
        <div className="flex flex-col justify-center border-l pl-6">
          <SocialLoginButtons />
        </div>
      </div>
    </div>
  );
}
