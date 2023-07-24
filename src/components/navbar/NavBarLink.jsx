import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

NavBarLink.propTypes = {
  children: PropTypes.string,
  to: PropTypes.string,
};

function NavBarLink({ children, to }) {
  return (
    <NavLink
      to={to}
      className="mx-3 hover:text-gray-600  active:text-wedgewood-300"
    >
      {children}
    </NavLink>
  );
}

export default NavBarLink;
