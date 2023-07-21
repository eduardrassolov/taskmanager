import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <>
      <div className="m-2 flex items-center">
        <NavLink to="/" className="flex">
          {/* <img src="../../src/img/logo.png" className="w-8" alt="logo" /> */}

          <p className="mx-1 hidden text-xl font-semibold text-gray-800 sm:block">
            TrackMate
          </p>
        </NavLink>
      </div>
    </>
  );
}

export default Logo;
