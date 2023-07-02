import axios from "axios";
import { API_URL, QUERY } from "./config.js";

export const getTaskById = async ({ params: { id } }) => {
  try {
    const response = await axios.get(`${API_URL}${QUERY}/${id}`);
    const data = await response.data;
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
