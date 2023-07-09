import { useNavigate } from "react-router";

function Page404() {
  const navigate = useNavigate();
  return (
    <>
      <main className="grid h-[100dvh-50px] place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-we-600 text-3xl font-bold text-wedgewood-500">
            404
          </p>
          <h1 className="mt-4 text-3xl  font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            We couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              className="rounded-md bg-wedgewood-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-wedgewood-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
