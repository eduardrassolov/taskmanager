import "animate.css";
import Overlay from "./Overlay";
import { Spinner } from "@material-tailwind/react";

function Loading() {
  return (
    <>
      <Overlay>
        <Spinner className="h-16 w-16  text-blue-500/10" />;
      </Overlay>
    </>
  );
}

export default Loading;
