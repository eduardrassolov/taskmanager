import { useState } from "react";
import { useTasks } from "../contexts/TasksContext";

function useCompletedTasks(completed) {
  const { taskslist } = useTasks();
  const [tasks, setTasks] = useState([...taskslist]);

  if (completed)
    setTasks((prev) => prev.filter((task) => task.isCompleted.status));

  return tasks;
}

export { useCompletedTasks };
