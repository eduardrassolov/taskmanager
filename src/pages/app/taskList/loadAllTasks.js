import { API_URL, QUERY } from "../../../config.js";
import axios from "axios";

export async function loadAllTasks(isCompleted) {
  try {
    const response = await axios.get(`${API_URL}${QUERY}`);
    const data = await response.data;
    return {
      data: data.filter((task) => task.isCompleted.status === isCompleted),
      error: null,
    };
  } catch (error) {
    return { data: null, error: error };
  }
}
