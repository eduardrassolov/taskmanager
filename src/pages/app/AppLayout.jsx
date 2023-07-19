import { Outlet, useNavigation } from "react-router";
import NavBar from "../../components/navbar/NavBar";
import LoadingIndicator from "./LoadingIndicator.jsx";
import { navLinks } from "../../components/navbar/navLinksApp";

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
