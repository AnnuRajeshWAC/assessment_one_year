import React from "react";

const Button = ({ label, onClick, disable = false, ...props }) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      {...props}
      className="py-2 px-3 bg-gray-400 text-white rounded-sm m-1 hover:bg-gray-600 shadow-2xs"
    >
      {label}
    </button>
  );
};

export default Button;
