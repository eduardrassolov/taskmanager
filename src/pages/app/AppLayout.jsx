import { Outlet, useNavigation } from "react-router";
import NavBar from "../../components/navbar/NavBar";
import LoadingIndicator from "./LoadingIndicator.jsx";
import { navLinks } from "../../components/navbar/navLinksApp";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "../../components/error/ErrorPage";

function AppLayout() {
  const { state } = useNavigation();

  return (
    <>
      {state === "loading" && <LoadingIndicator />}

      <NavBar links={navLinks} />
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Outlet />
      </ErrorBoundary>
    </>
  );
}

export default AppLayout;
