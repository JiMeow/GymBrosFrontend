import { env } from "@/env.mjs";
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: env.NEXTAUTH_URL
  });
  