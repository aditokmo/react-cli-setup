import { create } from 'zustand';

interface User {
    id: string;
    email: string;
    name?: string;
}

interface AuthState {
    user: User | null;
    isAuthenticated: boolean;
    setAuth: (user: User) => void;
    clearAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    isAuthenticated: false,

    setAuth: (user) => set({
        user,
        isAuthenticated: true
    }),

    clearAuth: () => set({
        user: null,
        isAuthenticated: false
    }),
}));