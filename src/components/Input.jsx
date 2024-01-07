import React from "react";

const Input = ({ title, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event.currentTarget.value);
  };

  return (
    <>
      <label>{title}</label>
      <input type="number" min={0} value={value} onChange={handleChange} />
    </>
  );
};

export default Input;
