import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return <div>{error}</div>;
}

export default ErrorPage;
