import React from "react";

const Input = ({ title, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.currentTarget.value);
  };

  return (
    <p>
      <label>{title}</label>
      <input type="number" min={0} value={value} onChange={handleChange} />
    </p>
  );
};

export default Input;
