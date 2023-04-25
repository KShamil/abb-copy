import React, { useState } from 'react';

export function CreditCalculator() {
  const [loanAmount, setLoanAmount] = useState<number>(35000);
  const [loanTerm, setLoanTerm] = useState<number>(60);
  const [interestRate, setInterestRate] = useState<number>(11.9);

  const handleLoanAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoanAmount(parseInt(event.target.value));
  };

  const handleLoanTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoanTerm(parseInt(event.target.value));
  };

  const handleInterestRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInterestRate(parseFloat(event.target.value));
  };

  const monthlyPayment = (): string => {
    const monthlyInterestRate = interestRate / 1200;
    const payment = loanAmount * monthlyInterestRate / (1 - (1 / Math.pow(1 + monthlyInterestRate, loanTerm)));
    return payment.toFixed(2);
  };

  return (
    <div>
      <h1>Credit Calculator</h1>
      <div>
        <label htmlFor="loan-amount">Loan Amount: {loanAmount}</label>
        <input
          type="range"
          id="loan-amount"
          min="1"
          max="35000"
          step="1000"
          value={loanAmount}
          onChange={handleLoanAmountChange}
        />
      </div>
      <div>
        <label htmlFor="loan-term">Loan Term: {loanTerm} months</label>
        <input
          type="range"
          id="loan-term"
          min="1"
          max="60"
          step="12"
          value={loanTerm}
          onChange={handleLoanTermChange}
        />
      </div>
      <div>
        <label htmlFor="interest-rate">Interest Rate: {interestRate}%</label>
        <input
          type="range"
          id="interest-rate"
          min="11.9"
          max="26.9"
          step="0.1"
          value={interestRate}
          onChange={handleInterestRateChange}
        />
      </div>
      <div>
        <h2>Monthly Payment: ${monthlyPayment()}</h2>
      </div>
    </div>
  );
}
