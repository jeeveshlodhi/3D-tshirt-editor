import React from "react";

const Slider = ({ title, value, changeValue }) => {

  const handleChange = (e) => {
    changeValue(parseFloat(e.target.value));
  }

  return (
    <div className="py-2">
      <label
        htmlFor="default-range"
        className="block  text-sm font-medium text-gray-900 "
      >
        {title}
      </label>
      <input
        id="default-range"
        type="range"
        value={value}
        onChange={handleChange}
        className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
      />
    </div>
  );
};

export default Slider;
