import axios from "axios";

const API_BASE: string = import.meta.env.VITE_API

const client = axios.create({
  baseURL: API_BASE,
  // withCredentials: true,
});

export default client;
