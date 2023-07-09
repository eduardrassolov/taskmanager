import Logo from "./Logo";
import NavBarLink from "./NavBarLink";
import PropTypes from "prop-types";

NavBar.propTypes = {
  links: PropTypes.array,
};
const defaultProps = [
  {
    text: "Main",
    to: "/",
  },
];

function NavBar({ links = [...defaultProps] }) {
  return (
    <>
      <nav className=" h-[50px] w-full bg-bgNav px-5 text-black">
        <ul className="flex items-center justify-between">
          <li>
            <Logo />
          </li>

          <li className="mx-3">
            <div className=" flex ">
              {links.map((link) => (
                <NavBarLink key={link.to} to={link.to}>
                  {link.text}
                </NavBarLink>
              ))}
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
