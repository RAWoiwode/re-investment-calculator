import React from "react";
import Input from "./Input";

const UserInput = ({ investmentData, onChange }) => {
  const { initialInvestment, annualInvestment, expectedReturn, duration } =
    investmentData;

  return (
    <form id="user-input">
      <div className="input-group">
        <Input
          title={"Initial Investment"}
          value={initialInvestment}
          onChange={(value) => onChange("initialInvestment", value)}
        />
        <Input
          title={"Annual Investment"}
          value={annualInvestment}
          onChange={(value) => onChange("annualInvestment", value)}
        />
      </div>
      <div className="input-group">
        <Input
          title={"Expected Return"}
          value={expectedReturn}
          onChange={(value) => onChange("expectedReturn", value)}
        />
        <Input
          title={"Duration"}
          value={duration}
          onChange={(value) => onChange("duration", value)}
        />
      </div>
    </form>
  );
};

export default UserInput;
