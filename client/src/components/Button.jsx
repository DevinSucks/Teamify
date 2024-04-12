import clsx from "clsx"; // Importing clsx library
import React from "react";

// Button component
const Button = ({ icon, className, label, type, onClick = () => {} }) => {
  return (
    // Button element with dynamic props
    <button
      type={type || "button"} // Default type is "button"
      className={clsx("px-3 py-2 outline-none ", className)} // Dynamically setting class names
      onClick={onClick} // onClick event handler
    >
      <span>{label}</span> {/* Button label */}
      {icon && icon} {/* Render icon if provided */}
    </button>
  );
};

// Exporting the Button component
export default Button;
