import { QueryClient } from "@tanstack/react-query";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export const queryClient = new QueryClient();

export default axiosClient;
