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
          onChange={(e) => onChange("initialInvestment", e)}
          value={initialInvestment}
        />
        <Input
          title={"Annual Investment"}
          onChange={(e) => onChange("annualInvestment", e)}
          value={annualInvestment}
        />
      </div>
      <div className="input-group">
        <Input
          title={"Expected Return"}
          onChange={(e) => onChange("expectedReturn", e)}
          value={expectedReturn}
        />
        <Input
          title={"Duration"}
          onChange={(e) => onChange("duration", e)}
          value={duration}
        />
      </div>
    </form>
  );
};

export default UserInput;
