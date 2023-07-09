import { NavLink } from "react-router-dom";
import Button from "../../components/buttons/Button";
import NavBar from "../../components/navbar/NavBar";
import "animate.css";

function Main() {
  return (
    <>
      <NavBar />
      <main className="item-center flex h-[calc(100dvh-50px)] flex-col justify-center bg-bgMain bg-cover bg-left text-center">
        <h1 className="animate__animated animate__fadeInDown text-black-900 mx-10 text-center text-5xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </h1>
        <NavLink to="app" className={"mx-auto my-10"}>
          <Button animation={"animate__fadeInUp"}>Start</Button>
        </NavLink>
      </main>
    </>
  );
}

export default Main;
