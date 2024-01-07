import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 1000,
    annualInvestment: 100,
    expectedReturn: 6,
    duration: 1,
  });

  const inputIsValid = investmentData.duration >= 1;

  const handleInvestmentDataChange = (id, value) => {
    const newData = {
      ...investmentData,
      [id]: +value,
    };

    setInvestmentData(newData);
  };

  return (
    <>
      <Header />
      <UserInput
        investmentData={investmentData}
        onChange={handleInvestmentDataChange}
      />
      {inputIsValid && <ResultsTable data={investmentData} />}
      {!inputIsValid && <p className="center">Please enter valid duration</p>}
    </>
  );
}

export default App;
