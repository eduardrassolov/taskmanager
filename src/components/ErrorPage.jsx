import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return <div>This is error {error}</div>;
}

export default ErrorPage;
