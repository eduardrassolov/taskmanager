import Logo from "./Logo";
import NavBarLink from "./NavBarLink";

function NavBar() {
  return (
    <>
      <nav className="absolute w-full px-5 py-2 text-white">
        <ul className="flex items-center justify-between">
          <li>
            <Logo />
          </li>

          <li className="mx-3">
            <div className=" flex ">
              <NavBarLink to="/">Main</NavBarLink>
              <NavBarLink to="/pricing">Pricing</NavBarLink>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
