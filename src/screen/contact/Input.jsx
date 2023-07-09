import React from "react";

const Input = ({ type, label, value }) => {
  return (
    <div className="mb-6">
      <label
        htmlFor={label}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <input
        type={type}
        id={label}
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-transparent sm:text-md focus:outline-none focus:border-gray-600"
      />
    </div>
  );
};

export default Input;
