import React from "react";
import { calculateInvestmentResults, formatter } from "../util/investment";

const ResultsTable = ({ data }) => {
  const annualData = calculateInvestmentResults(data);

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
        <tr>
          <td>{formatter.format(annualData.year)}</td>
          <td>{formatter.format(data.initialInvestment)}</td>
          <td>{formatter.format(annualData.interest)}</td>
          <td>{formatter.format(annualData.valueEndOfYear)}</td>
          <td>{formatter.format(annualData.annualInvestment)}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default ResultsTable;
