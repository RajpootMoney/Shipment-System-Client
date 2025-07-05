export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
  updatedAt: string;
}

export type UserRole = 'admin' | 'user' | 'manager';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  isLoading: boolean;
  isAuthenticated: boolean;
}

export interface LoginResponse {
  success: boolean;
  error?: string;
  user?: User;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  role?: UserRole;
} 