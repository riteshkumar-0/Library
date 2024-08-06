import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:1001",
  headers: {
    "Content-Type": "application/json",
  },
});

export const getBookRequests = () => apiClient.get("/request/bookrequest");
export const getArticles = () => apiClient.get("/request/article");
export const getMagazines = () => apiClient.get("/request/magazine");
