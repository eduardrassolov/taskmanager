import { NavLink } from "react-router-dom";
import Button from "../components/buttons/Button";
import NavBar from "../components/navbar/NavBar";
import "animate.css";

function Main() {
  return (
    <>
      <NavBar />
      <main
        className="item-center b brightness-20 flex h-screen flex-col justify-center bg-cover bg-left text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(36, 42, 46, 0.75), rgba(36, 42, 46, 0.75)
    ),
    url("../../src/img/bg-main1.jpg")`,
        }}
      >
        <h1 className="animate__animated animate__fadeInDown mx-10 text-center text-5xl text-gray-100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
        </h1>
        <NavLink to="app" className={"mx-auto my-10"}>
          <Button animation={"animate__fadeInUp"}>Start</Button>
        </NavLink>
      </main>
    </>
  );
}

export default Main;
