import React from "react";
import Input from "./Input";

const UserInput = ({ investmentData, onDataChange }) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    investmentData;

  const toNumber = (x) => {
    return Number(x);
  };

  const handleInitialInvestmentChange = (event) => {
    const newData = {
      ...investmentData,
      initialInvestment: toNumber(event),
    };

    onDataChange(newData);
  };

  const handleAnnualInvestmentChange = (event) => {
    const newData = {
      ...investmentData,
      annualInvestment: toNumber(event),
    };

    onDataChange(newData);
  };

  const handleExpectedReturnChange = (event) => {
    const newData = {
      ...investmentData,
      expectedReturn: toNumber(event),
    };

    onDataChange(newData);
  };

  const handleDurationChange = (event) => {
    const newData = {
      ...investmentData,
      duration: toNumber(event),
    };

    onDataChange(newData);
  };

  return (
    <form id="user-input">
      <div className="input-group">
        <Input
          title={"Initial Investment"}
          onChange={handleInitialInvestmentChange}
          value={initialInvestment}
        />
        <Input
          title={"Annual Investment"}
          onChange={handleAnnualInvestmentChange}
          value={annualInvestment}
        />
      </div>
      <div className="input-group">
        <Input
          title={"Expected Return"}
          onChange={handleExpectedReturnChange}
          value={expectedReturn}
        />
        <Input
          title={"Duration"}
          onChange={handleDurationChange}
          value={duration}
        />
      </div>
    </form>
  );
};

export default UserInput;
