import { Navigate, createBrowserRouter, redirect } from "react-router-dom";
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
        loader: async () => controller.loadAllTasks(false),
        action: async ({ request }) => {
          await taskAction({ request });
          return redirect(`/app`);
        },
      },
      {
        // Pages whows all completed tasks
        path: ROUTES.completed,
        element: <TaskListPage showCompleted={true} />,
        //TODO check if this is needed
        loader: async () => controller.loadAllTasks(true),
        action: async ({ request }) => {
          await taskAction({ request });
          return redirect(`/app/tasks/completed`);
        },
      },
      {
        //Shows selected task
        path: `${ROUTES.tasks}${ROUTES.selectedTask}`,
        element: <TaskInfoPage />,
        loader: controller.getTaskById,
      },
      {
        //Shows selected task
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
