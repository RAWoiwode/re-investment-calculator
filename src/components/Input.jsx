import React from "react";

const Input = ({ title, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  return (
    <p>
      <label>{title}</label>
      <input type="number" value={value} onChange={handleChange} required />
    </p>
  );
};

export default Input;
