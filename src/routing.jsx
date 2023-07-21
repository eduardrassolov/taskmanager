import { Navigate, createHashRouter, redirect } from "react-router-dom";
import Main from "./pages/main/MainPage";

import AppLayout from "./pages/app/AppLayout";
import TaskListPage from "./pages/app/taskList/TaskListPage";
import TaskInfoPage from "./pages/app/task/TaskInfoPage";
import Page404 from "./pages/Page404";
import ErrorPage from "./components/ErrorPage";
import { controller } from "./pages/app/taskList/taskController";
import { action as taskAction } from "./pages/app/newTask/newTaskAction";

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
        action: async ({ request }) => {
          await taskAction({ request });
          return redirect(`/app`);
        },
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
