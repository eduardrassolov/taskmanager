import Button from "./Button";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";
import { BiArrowBack } from "react-icons/bi";

BackButton.propTypes = {
  children: PropTypes.string,
  size: PropTypes.string,
};

function BackButton({ children, size = "xs" }) {
  const navigate = useNavigate();
  return (
    <>
      <Button variant="outlined" onClick={() => navigate(-1)} size={size}>
        <BiArrowBack size={"1rem"} className="mr-1" />
        {children}
      </Button>
    </>
  );
}

export default BackButton;
