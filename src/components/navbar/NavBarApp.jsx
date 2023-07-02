import Logo from "./Logo";
import NavBarLink from "./NavBarLink";

function NabBarApp() {
  return (
    <nav className="bg-wedgewood-400 px-5 py-2 text-white ">
      <ul className="flex items-center justify-between">
        <li>
          <Logo />
        </li>
        <div className="mx-5 flex">
          <li className="mx-3">
            <NavBarLink to="tasks">Tasks</NavBarLink>
          </li>
          <li className="mx-3">
            <NavBarLink to="tasks/completed">Completed tasks</NavBarLink>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default NabBarApp;
