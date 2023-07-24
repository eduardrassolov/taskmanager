import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { BiArrowBack } from "react-icons/bi";
import { NavLink } from "react-router-dom";

BackButton.propTypes = {
  children: PropTypes.string,
  size: PropTypes.string,
};

function BackButton({ children, size = "xs" }) {
  const navigate = useNavigate();
  return (
    <>
      <NavLink
        onClick={() => navigate(-1)}
        size={size}
        className={
          "flex w-fit items-center transition-colors duration-300 hover:text-gray-500"
        }
      >
        <BiArrowBack size={"1rem"} className="mr-1" />
        {children}
      </NavLink>
    </>
  );
}

export default BackButton;
