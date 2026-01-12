import axios, { type AxiosResponse, type AxiosError, type InternalAxiosRequestConfig } from 'axios'

export const http = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1',
    headers: { "Content-Type": "application/json" },
    withCredentials: true
});

http.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
        const token = await cookieStore.get("token");
        if (token) config.headers.Authorization = `Bearer ${token.value}`;
        return config;
    }
)

http.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
        const status = error.response?.status;

        if (status === 401) window.location.href = '/login';
        if (status === 500) console.error("Server Error: ", error.response?.data as { message?: string } || "Internal Server Error")

        return Promise.reject(error);
    }
)