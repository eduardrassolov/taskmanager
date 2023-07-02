import PropTypes from "prop-types";
import "animate.css";

Button.propTypes = {
  children: PropTypes.string,
  animation: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

function Button({ children, animation, onClick, type = null }) {
  return (
    <button
      className={`animate__animated ${animation} mr-2 rounded-md bg-wedgewood-500 px-5 py-2 text-base text-white hover:bg-wedgewood-600 active:bg-wedgewood-700`}
      onClick={onClick}
      type={type && type}
    >
      {children}
    </button>
  );
}

export default Button;
