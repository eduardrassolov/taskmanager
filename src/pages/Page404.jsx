import { useNavigate } from "react-router";
// import NavBar from "../components/navbar/NavBar";
// import { navLinks } from "../components/navbar/navLinksApp";

function Page404() {
  const navigate = useNavigate();
  return (
    <>
      {/* <NavBar links={navLinks} /> */}
      <main className="bg-gray flex h-[100dvh] w-[100vw] items-center justify-center ">
        <div className="mx-2 w-fit text-center md:flex">
          <img
            src="../public/404img.png"
            alt="404img"
            className="md:min-w-[10rem] md:max-w-[30rem]"
          />
          <div className="flex flex-col items-center justify-center  text-center md:flex-col">
            <p className="my-2 break-words text-base text-gray-600 md:min-w-[300px] md:max-w-[600px]">
              {
                " Uh-oh! The page you're looking for couldn't be found. Double-check the URL or head back to our homepage."
              }
            </p>
            <button
              className="mt-4 w-fit rounded-md bg-wedgewood-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-wedgewood-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => navigate(-1)}
            >
              Go back
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Page404;
