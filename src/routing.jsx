import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
import Main from "./pages/main/MainPage";

import AppLayout from "./pages/app/AppLayout";
import TaskListPage from "./pages/app/taskList/TaskListPage";
import TaskInfoPage from "./pages/app/task/TaskInfoPage";
import Page404 from "./pages/Page404";
import ErrorPage from "./components/ErrorPage";
import { controller } from "./pages/app/taskList/taskController";
import { action as taskAction } from "./pages/app/newTask/newTaskAction";

const main = "https://taskmanager-nu-peach.vercel.app";

const ROUTES = {
  home: "/",
  app: main + "/app",
  tasks: `${main}/app/tasks}`,
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
        element: <Navigate replace to={ROUTES.tasks} />,
        index: true,
      },
      {
        path: ROUTES.tasks,
        element: <TaskListPage />,
        loader: async ({ request }) => controller.loadTasks(request),
        action: async ({ request }) => {
          await taskAction({ request });
          return redirect(`/app`);
        },
      },
      {
        path: ROUTES.completed,
        element: <TaskListPage showCompleted={true} />,
        loader: controller.loadCompletedTasks,
        action: async ({ request }) => {
          await taskAction({ request });
          return redirect(`/app/tasks/completed`);
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
