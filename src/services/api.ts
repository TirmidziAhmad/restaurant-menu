import axios from "axios";
import type { Restaurant } from "../types/restaurant";

const BASE_URL =
  "https://my-json-server.typicode.com/TirmidziAhmad/restaurant-api";

const api = axios.create({
  baseURL: BASE_URL,
});

export const getRestaurants = async (
  category?: string,
): Promise<Restaurant[]> => {
  const params = category ? { category } : {};
  const response = await api.get<Restaurant[]>("/restaurants", { params });
  return response.data;
};

export const getRestaurantById = async (
  id: string | number,
): Promise<Restaurant> => {
  const response = await api.get<Restaurant>(`/restaurants/${id}`);
  return response.data;
};

export default api;
