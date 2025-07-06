"use client";

import { useState } from "react";

type Props = {
  onLogin: (email: string, password: string) => void;
  isLoading: boolean;
};

export function LoginForm({ onLogin, isLoading }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email Address
        </label>
        <input
          id="email"
          type="email"
          required
          className="mt-1 w-full px-3 py-2 border rounded shadow-sm"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          className="mt-1 w-full px-3 py-2 border rounded shadow-sm"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full bg-black text-white py-2 rounded mt-4 hover:bg-gray-800"
      >
        {isLoading ? "Logging in..." : "Log In"}
      </button>
    </form>
  );
}
