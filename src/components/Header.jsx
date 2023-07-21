/* eslint-disable react/prop-types */
function generateText(status) {
  switch (status) {
    case "completed":
      return "Completed tasks:";
    case "uncompleted":
      return "Tasks to do:";
    default:
      return "All tasks:";
  }
}

function Header({ children }) {
  return (
    <h1 className="text-bold mx-auto mb-5 text-center text-2xl">
      {generateText(children)}
    </h1>
  );
}

export default Header;
