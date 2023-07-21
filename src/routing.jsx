import { Navigate, createHashRouter } from "react-router-dom";
import Main from "./pages/main/MainPage";

import AppLayout from "./pages/app/AppLayout";
import TaskListPage from "./pages/app/taskList/TaskListPage";
import TaskInfoPage from "./pages/app/task/TaskInfoPage";
import Page404 from "./pages/Page404";
import ErrorPage from "./components/ErrorPage";
import { controller } from "./pages/app/taskList/taskController";
import { taskAction } from "./pages/app/taskList/taskAction.js";

const ROUTES = {
  home: "/",
  app: "/app",
  tasks: `/app/tasks`,
  selectedTask: "/:id",
};

const routing = createHashRouter([
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
        element: <Navigate replace to={ROUTES.tasks} />,
        index: true,
      },
      {
        path: ROUTES.tasks,
        element: <TaskListPage />,
        loader: controller.loadTasks,
        action: taskAction,
      },

      // TODO refactor to one path
      {
        path: `${ROUTES.tasks}${ROUTES.selectedTask}`,
        element: <TaskInfoPage />,
        loader: controller.getTaskById,
      },
      {
        path: `${ROUTES.completed}${ROUTES.selectedTask}`,
        element: <TaskInfoPage />,
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
