import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return <div>this is error {error}</div>;
}

export default ErrorPage;
