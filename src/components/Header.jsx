/* eslint-disable react/prop-types */
function Header({ children }) {
  return (
    <h1 className="text-bold mx-auto mb-5 text-center text-2xl">{children}</h1>
  );
}

export default Header;
