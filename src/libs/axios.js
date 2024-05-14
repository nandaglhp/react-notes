import Base, { AxiosError } from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const axios = Base.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage
            .getItem("token")
            ?.replace(/"/g, "")}`,
    },
});

axios.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")?.replace(/"/g, "");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export { axios, AxiosError };
