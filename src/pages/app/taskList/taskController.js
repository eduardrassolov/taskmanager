import axios from "axios";
import { API_URL, QUERY } from "../../../config.js";

class TaskController {
  _GenereateTask(title) {
    return {
      title,
      timeCreated: new Date(),
      isCompleted: false,
      priority: "No priority",
    };
  }
  async loadTasks({ request }) {
    const url = new URL(request.url);
    const status = url.searchParams.get("status");

    const requestQuery = `${API_URL}${QUERY}?status=${status}`;
    try {
      const response = await axios.get(requestQuery);
      const data = await response.data;
      console.log(data, status);
      return {
        data,
        error: null,
        status,
      };
    } catch (err) {
      const { message, code } = err;
      console.log(err);
      return { data: null, error: { message, code } };
    }
  }
  async addNewTask(taskName) {
    try {
      const task = this._GenereateTask(taskName);
      const { status, statusText } = await axios.post(
        `${API_URL}${QUERY}`,
        task
      );
      console.log(status, statusText);
      return { data: status, statusText: statusText };
    } catch (error) {
      return error;
    }
  }
  async completeTask(id) {
    try {
      const response = await axios.post(`${API_URL}${QUERY}/${id}/complete`);
      if (response.status !== 200) throw new Error("Task cannot be completed");
      return { data: response.status, error: null };
    } catch (err) {
      return { error: err, data: null };
    }
  }
  async deleteTask(id) {
    try {
      const res = await axios.delete(`${API_URL}${QUERY}/${id}/delete`);
      if (res.status !== 200)
        throw new Error("Something went wrong while deleting task");
      return { data: res.status, error: null };
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
  async updateTask(id, updatedTask) {
    console.log("test2", updatedTask);
    try {
      const response = await axios.put(
        `${API_URL}${QUERY}/${id}/update`,
        updatedTask
      );
      const data = await response.data;
      return { data, error: null };
    } catch (error) {
      return { data: null, error };
    }
  }
}

export const controller = new TaskController();
