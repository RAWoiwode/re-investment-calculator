import React from "react";

export const UserInput = () => {
  return (
    <form id="user-input">
      <div className="input-group">
        <label>Initial Investment</label>
        <input type="number" />
        <label>Annual Investment</label>
        <input type="number" />
      </div>
      <div className="input-group">
        <label>Expected Return</label>
        <input type="number" />
        <label>Duration</label>
        <input type="number" />
      </div>
    </form>
  );
};
