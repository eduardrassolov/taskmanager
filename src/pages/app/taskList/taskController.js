import axios from "axios";
import { API_URL, QUERY } from "../../../config.js";

class TaskController {
  async loadAllTasks(isCompleted) {
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
  async addNewTask(taskName) {
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
      return { data: response.status, error: null };
    } catch (error) {
      return { data: null, error: error };
    }
  }
  async deleteTask(id) {
    try {
      const res = await axios.delete(`${API_URL}${QUERY}/${id}`);

      if (res.status !== 200)
        throw new Error("Something went wrong while deleting task");

      return { response: res.status, error: null };
    } catch (err) {
      return { error: err };
    }
  }
  async getTaskById({ params }) {
    const { id } = params;
    try {
      const response = await axios.get(`${API_URL}${QUERY}/${id}`);
      const data = await response.data;

      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }
}

export const controller = new TaskController();
