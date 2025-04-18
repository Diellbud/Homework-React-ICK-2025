
import React from "react";

function Button({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="px-4 py-2 bg-green-600 text-white border-none cursor-pointer mt-4"
    >
      {children}
    </button>
  );
}

export default Button;
