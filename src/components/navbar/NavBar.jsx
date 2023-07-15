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
      <nav className=" h-[50px] w-full border-b-2 bg-background  text-text">
        <ul className="flex items-center justify-between gap-4">
          <li>
            <Logo />
          </li>
          <li>
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
