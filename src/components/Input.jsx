
import React from "react";

function Input({ label, type, value, onChange, name }) {
  return (
    <div className="mb-4">
      <label className="block font-bold">{label}</label>
      <input
        className="border-solid border-2 rounded-xl p-2 w-full"
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;
