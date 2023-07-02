import PropTypes from "prop-types";
import "animate.css";
import { useEffect, useState } from "react";

const type = {
  success: {
    color: "bg-green-500 text-white",
    animationIn: "animate__fadeInDown",
    animationOut: "animate__fadeOutUp",
  },
  error: {
    color: "bg-red-500 text-white",
    animationIn: "animate__headShake",
    animationOut: "animate__fadeOut",
  },
  warning: "bg-yellow-500 text-black",
  info: "bg-blue-500 text-white",
};

Notification.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(["success", "error", "warning", "info"]),
  duration: PropTypes.number,
};

function Notification({ children, color = "success", duration = 2 }) {
  const currentColor = type[color].color;
  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    setAnimation(type[color].animationIn);
    const delay = setTimeout(() => {
      setAnimation(type[color].animationOut);
    }, duration * 1000);
    return () => {
      clearTimeout(delay);
      setAnimation(null);
    };
  }, []);

  return (
    <div
      className={`animate__animated ${animation} ${currentColor} fixed inset-0 top-3 mx-auto flex h-fit w-fit rounded-xl  bg-opacity-40 px-8 py-4 backdrop-blur-sm backdrop-filter`}
    >
      {children}
    </div>
  );
}

export default Notification;
