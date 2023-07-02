import { useState } from "react";

// eslint-disable-next-line react/prop-types
function IconButton({ children, color, icon, iconHover }) {
  const [isHover, seHover] = useState(false);

  const handleHover = () => seHover((prev) => !prev);

  return (
    <>
      <div
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
        className={`${color}`}
      >
        {isHover ? iconHover : icon}
      </div>
    </>
  );
}

export default IconButton;
