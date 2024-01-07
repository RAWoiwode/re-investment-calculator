import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const ResultsTable = ({ data }) => {
  const annualData = calculateInvestmentResults(data);
  let totalInterest = 0;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((aData) => {
          totalInterest += aData.interest;
          return (
            <tr key={aData.year}>
              <td>{aData.year}</td>
              <td>{formatter.format(aData.valueEndOfYear)}</td>
              <td>{formatter.format(aData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(aData.valueEndOfYear - totalInterest)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ResultsTable;
