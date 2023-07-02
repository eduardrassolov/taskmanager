import { Outlet } from "react-router";
import NavBarApp from "../components/navbar/NavBarApp";

function AppLayout() {
  return (
    <>
      <NavBarApp />
      <Outlet />
    </>
  );
}

export default AppLayout;
