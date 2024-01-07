import React from "react";
import Input from "./Input";

const UserInput = ({ investmentData, onDataChange }) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    investmentData;

  const toNumber = (x) => {
    return Number(x);
  };

  const handleInvestmentDataChange = (id, event) => {
    const newData = {
      ...investmentData,
      [id]: toNumber(event),
    };

    onDataChange(newData);
  };

  return (
    <form id="user-input">
      <div className="input-group">
        <Input
          title={"Initial Investment"}
          onChange={(e) => handleInvestmentDataChange("initialInvestment", e)}
          value={initialInvestment}
        />
        <Input
          title={"Annual Investment"}
          onChange={(e) => handleInvestmentDataChange("annualInvestment", e)}
          value={annualInvestment}
        />
      </div>
      <div className="input-group">
        <Input
          title={"Expected Return"}
          onChange={(e) => handleInvestmentDataChange("expectedReturn", e)}
          value={expectedReturn}
        />
        <Input
          title={"Duration"}
          onChange={(e) => handleInvestmentDataChange("duration", e)}
          value={duration}
        />
      </div>
    </form>
  );
};

export default UserInput;
