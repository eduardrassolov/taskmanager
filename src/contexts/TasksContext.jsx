/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { API_URL, QUERY } from "../../src/config.js";

const TasksContext = createContext();

// eslint-disable-next-line react/prop-types
function TasksProvider({ children }) {
  const [tasksList, setTasksList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  console.log(tasksList);

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}${QUERY}`);
      const data = await response.data;
      setTasksList(data);
    } catch (error) {
      console.error(error.code);
    } finally {
      setLoading(false);
    }
  }
  async function addTask(taskName) {
    try {
      const taskObj = {
        title: taskName,
        timeCreated: new Date(),
        isCompleted: {
          status: false,
          timeCompleted: null,
        },
      };

      setLoading(true);
      const response = await axios.post(`${API_URL}${QUERY}`, taskObj);
      setTasksList((prev) => [
        ...prev,
        {
          ...taskObj,
          _id: response.data,
        },
      ]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  async function deleteTask(id) {
    try {
      setLoading(true);
      const response = await axios.delete(`${API_URL}${QUERY}/${id}`);

      if (response.status !== 200) throw new Error("Task cannot be deleted");

      setTasksList((prev) => prev.filter((task) => task._id !== id));
      console.log("deleted");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }
  async function completeTask(id) {
    try {
      const response = await axios.post(`${API_URL}${QUERY}/${id}/complete`);
      if (response.status !== 200) throw new Error("Task cannot be completed");

      setTasksList((prev) =>
        prev.map((task) =>
          task._id === id
            ? {
                ...task,
                isCompleted: {
                  status: !task.isCompleted.status,
                  timeCompleted: new Date(),
                },
              }
            : task
        )
      );
    } catch (err) {
      console.error(err);
    }
  }
  async function editTask(id, task) {}

  return (
    <TasksContext.Provider
      value={{
        isLoading,
        tasksList,
        addTask,
        deleteTask,
        completeTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

function useTasks() {
  const context = useContext(TasksContext);
  return context;
}

export { TasksProvider, useTasks };
