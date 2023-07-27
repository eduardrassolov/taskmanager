/* eslint-disable react/prop-types */
import generateErrorMessage from "./generateMsg.js";
import Button from "../buttons/Button.jsx";
import { useErrorBoundary } from "react-error-boundary";
import { useNavigate } from "react-router";

function ErrorFallback({ error, onReset }) {
  const errorMessage = generateErrorMessage(error);
  const { resetBoundary } = useErrorBoundary();

  const navigate = useNavigate();
  console.log(resetBoundary);
  return (
    <div className="mx-auto mt-5 flex max-w-[600px] flex-col items-center ">
      <p className="mb-2 text-center text-gray-600">{errorMessage}</p>
      <Button
        onClick={() => {
          resetBoundary();
          navigate(0);
        }}
      >
        Try again
      </Button>
    </div>
  );
}

export default ErrorFallback;
