import "animate.css";

// eslint-disable-next-line react/prop-types
function Overlay({ children }) {
  return (
    <div
      className="absolute left-0 top-0 z-40 flex h-screen w-screen items-center justify-center bg-black opacity-50 
    
     transition duration-200"
    >
      {children}
    </div>
  );
}

export default Overlay;
