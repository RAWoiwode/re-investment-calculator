import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import UserInput from "./components/UserInput";

function App() {
  const [investmentData, setInvestmentData] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const handleDataChange = (data) => {
    setInvestmentData(data);
  };

  return (
    <>
      <Header />
      <UserInput
        investmentData={investmentData}
        onDataChange={handleDataChange}
      />
      <ResultsTable data={investmentData} />
    </>
  );
}

export default App;
