import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "./pages/Main";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import TaskListPage from "./components/task/TaskListPage";
import TaskInfoPage from "./components/task/taskDetails/TaskInfoPage";
import Page404 from "./pages/Page404";
import ErrorPage from "./components/ErrorPage";
import { getTaskById } from "./getTaskById";

const ROUTES = {
  home: "/",
  app: "app",
  pricing: "pricing",
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
    path: ROUTES.pricing,
    element: <Pricing />,
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
      },
      {
        // Pages whows all completed tasks
        path: ROUTES.completed,
        element: <TaskListPage completed={true} />,
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
