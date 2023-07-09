import { API_URL, QUERY } from "../../../config.js";

export const getTaskById = async ({ params: { id } }) => {
  try {
    const response = await fetch(`${API_URL}${QUERY}/${id}`);
    const data = await response.json();
    return { data, error: null };
  } catch (error) {
    return { data: null, error };
  }
};
