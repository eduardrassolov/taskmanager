import { API_URL, QUERY } from "../../../config.js";
import axios from "axios";

export async function addNewTask(taskName) {
  try {
    const task = {
      title: taskName,
      timeCreated: new Date(),
      isCompleted: {
        status: false,
        timeCompleted: null,
      },
    };
    const response = await axios.post(`${API_URL}${QUERY}`, task);

    return { data: response.data, error: null };
  } catch (error) {
    return { data: null, error: error };
  }
}
