import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/MainPage";

import AppLayout from "./pages/app/AppLayout";
import TaskListPage from "./pages/app/taskList/TaskListPage";
import TaskInfoPage from "./components/task/taskDetails/TaskInfoPage";
import Page404 from "./pages/Page404";
import ErrorPage from "./components/ErrorPage";
import { getTaskById } from "./pages/app/taskList/getTaskById";
import { loadAllTasks } from "./pages/app/taskList/loadAllTasks";
import { action as addNewTask } from "./pages/app/newTask/NewTaskForm";

const ROUTES = {
  home: "/",
  app: "app",
  tasks: "tasks",
  selectedTask: "/:id",
  completed: "tasks/completed",
};

const routing = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Main />,
  },

  {
    path: ROUTES.app,
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        // By default open page tasks
        element: <Navigate replace to={ROUTES.tasks} />,
        index: true,
      },
      {
        // Pages with all uncompleted tasks
        path: ROUTES.tasks,
        element: <TaskListPage />,
        //TODO check if this is needed
        loader: async () => loadAllTasks(false),
        action: addNewTask,
      },
      {
        // Pages whows all completed tasks
        path: ROUTES.completed,
        element: <TaskListPage showCompleted={true} />,
        //TODO check if this is needed
        loader: async () => loadAllTasks(true),
      },
      {
        //Shows selected task
        path: `${ROUTES.tasks}${ROUTES.selectedTask}`,
        element: <TaskInfoPage />,
        loader: getTaskById,
      },
      {
        //Shows selected task
        path: `${ROUTES.completed}${ROUTES.selectedTask}`,
        element: <TaskInfoPage />,
        loader: getTaskById,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default routing;
