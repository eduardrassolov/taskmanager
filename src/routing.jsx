import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "./pages/main/MainPage";
import AppLayout from "./pages/app/AppLayout";
import TaskListPage from "./pages/app/taskList/TaskListPage";
import TaskEditPage from "./pages/app/editTask/TaskEditPage";
import Page404 from "./pages/Page404";

import { controller } from "./pages/app/taskList/taskController";
import { taskAction } from "./pages/app/taskList/taskAction.js";

const ROUTES = {
  home: "/",
  app: "/app",
  tasks: `/app/tasks`,
  selected: "/app/tasks/:id/edit",
};

const routing = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Main />,
  },

  {
    path: ROUTES.app,
    element: <AppLayout />,

    children: [
      {
        element: <Navigate replace to={ROUTES.tasks} />,
        index: true,
      },
      {
        path: ROUTES.tasks,
        element: <TaskListPage />,
        loader: controller.loadTasks,
        action: taskAction,
      },
      {
        path: ROUTES.selected,
        element: <TaskEditPage />,
        loader: controller.getTaskById,
      },
    ],
  },
  {
    path: "*",
    element: <Page404 />,
  },
]);

export default routing;
