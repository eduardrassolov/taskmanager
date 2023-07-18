import { NavLink } from "react-router-dom";
import Button from "../../components/buttons/Button";
import NavBar from "../../components/navbar/NavBar";
import "animate.css";

function Main() {
  return (
    <>
      <NavBar />
      <main className="item-center flex h-[calc(100dvh-50px)] flex-col justify-center bg-background text-center">
        <h1 className="text-black-900 mx-auto w-full min-w-[150px] max-w-[800px] text-center text-5xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </h1>
        <NavLink to="app" className={"mx-auto my-10"}>
          <Button size="lg">Start</Button>
        </NavLink>
      </main>
    </>
  );
}

export default Main;
