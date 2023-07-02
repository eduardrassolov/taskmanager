import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router";
import PropTypes from "prop-types";

BackButton.propTypes = {
  children: PropTypes.string,
  size: PropTypes.string,
};

function BackButton({ children, size = "sm" }) {
  const navigate = useNavigate();
  return (
    <>
      <Button
        variant="outlined"
        onClick={() => navigate(-1)}
        className=" border-wedgewood-400 text-wedgewood-400"
        size={size}
      >
        <span>{children}</span>
      </Button>
    </>
  );
}

export default BackButton;
