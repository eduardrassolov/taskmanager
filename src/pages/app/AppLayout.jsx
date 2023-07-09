import { Outlet, useNavigation } from "react-router";
import NavBar from "../../components/navbar/NavBar";
import LoadingIndicator from "./LoadingIndicator.jsx";

const navLinks = [
  {
    to: "/app",
    text: "Tasks",
  },
  {
    to: "/app/tasks/completed",
    text: "Completed tasks",
  },
];

function AppLayout() {
  const { state } = useNavigation();

  return (
    <>
      {state === "loading" && <LoadingIndicator />}

      <NavBar links={navLinks} />
      <Outlet />
    </>
  );
}

export default AppLayout;
