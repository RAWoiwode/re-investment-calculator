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

  const toNumber = (x) => {
    return Number(x);
  };

  const handleInvestmentDataChange = (id, event) => {
    const newData = {
      ...investmentData,
      [id]: toNumber(event),
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
      <ResultsTable data={investmentData} />
    </>
  );
}

export default App;
