import PropTypes from "prop-types";
import "animate.css";

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  size: PropTypes.string,
};

const btnStyle = {
  defaultStyle:
    "mr-1 rounded-lg border-[1px] transition-colors px-4 py-2  duration-300 flex items-center",
  primary:
    "border-blueribbon-500 bg-blueribbon-500 text-blueribbon-50 hover:bg-blueribbon-700 active:bg-blueribbon-800",
  outlined:
    "border-blueribbon-700 text-blueribbon-700 hover:bg-blueribbon-50 active:bg-blueribbon-100",
  noBorder: "hover:bg-gray-200 border-none",
};

function Button({
  children,
  onClick,
  variant = "primary",
  size = "sm",
  type = "button",
}) {
  const style = `${btnStyle.defaultStyle} ${btnStyle[variant]} text-` + size;
  return (
    <button className={style} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
