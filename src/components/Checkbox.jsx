import React from "react";

const Checkbox = ({ htmlFor, label, name, id }) => {
  return (
    <div className="col-span-2 flex items-center md:my-0 my-4 mb-6">
      <input
        name={name}
        id={id}
        type="checkbox"
        className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
      />
      <label htmlFor={htmlFor} className="ml-2 block text-sm text-gray-900 ">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
