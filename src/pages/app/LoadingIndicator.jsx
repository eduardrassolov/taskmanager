import "animate.css";
import { Spinner } from "@material-tailwind/react";

function LoadingIndicator() {
  return (
    <>
      <div className="absolute left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-black opacity-50 transition duration-200">
        <Spinner className="h-12 w-12  text-blue-500/10" />;
      </div>
    </>
  );
}

export default LoadingIndicator;
