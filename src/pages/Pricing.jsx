import NavBar from "../components/navbar/NavBar";

function Pricing() {
  return (
    <>
      <NavBar />
      <section
        className="item-center flex h-screen flex-col justify-center bg-wedgewood-50 bg-cover bg-center text-center"
        style={{
          backgroundImage: `linear-gradient(rgba(36, 42, 46, 0.75), rgba(36, 42, 46, 0.75)
    ),
    url("../../src/img/pricing.jpg")`,
        }}
      >
        Pricing
      </section>
    </>
  );
}

export default Pricing;
