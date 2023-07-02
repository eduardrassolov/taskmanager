import { useEffect, useState } from "react";
import "animate.css";
import PropTypes from "prop-types";

Alert.propTypes = {
  children: PropTypes.string,
  animIn: PropTypes.string,
  animOut: PropTypes.string,
  color: PropTypes.string,
  background: PropTypes.string,
  duration: PropTypes.number,
  onClose: PropTypes.func,
};

// eslint-disable-next-line react/prop-types
function Alert({
  children,
  animIn = "animate__fadeInDown",
  animOut = "animate__fadeOutUp",
  color = "bg-green-50",
  background = "text-green-500",
  duration = 2,
  onClose,
}) {
  const [animation, setAnim] = useState(animIn);

  const handleEndAnimation = () => animation === animOut && onClose();

  useEffect(() => {
    const delay = setTimeout(() => {
      setAnim(() => animOut);
    }, duration * 1000);
    return () => clearTimeout(delay);
  }, []);

  return (
    <div
      className={`animate__animated ${animation} ${color} ${background} fixed inset-x-0 top-2 mx-auto w-fit rounded-lg px-12 py-4 opacity-70`}
      onAnimationEnd={handleEndAnimation}
    >
      <span className="font-bold">{children}</span>
    </div>
  );
}

export default Alert;
