import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <>
      <div className="m-2 flex items-center">
        <img src="../../src/img/logo.png" className="w-8" alt="logo" />
        <NavLink to="/">
          <p className="mx-1 text-xl font-semibold text-gray-800">TrackMate</p>
        </NavLink>
      </div>
    </>
  );
}

export default Logo;
