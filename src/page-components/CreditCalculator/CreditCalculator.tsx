import React, { useState } from "react";
import styles from "./CreditCalculator.module.scss";
import { CreditCalculatorProps } from "./CreditCalculator.props";

export function CreditCalculator({
  ...props
}: CreditCalculatorProps): JSX.Element {
  const [loanAmount, setLoanAmount] = useState<number>(35000);
  const [loanTerm, setLoanTerm] = useState<number>(60);
  const [interestRate, setInterestRate] = useState<number>(11.9);

  const handleLoanAmountChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoanAmount(parseInt(event.target.value));
  };

  const handleLoanTermChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoanTerm(parseInt(event.target.value));
  };

  const handleInterestRateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInterestRate(parseFloat(event.target.value));
  };

  const monthlyPayment = (): string => {
    const monthlyInterestRate = interestRate / 1200;
    const payment =
      (loanAmount * monthlyInterestRate) /
      (1 - 1 / Math.pow(1 + monthlyInterestRate, loanTerm));
    return payment.toFixed(2);
  };

  return (
    <div {...props} className={styles.wrapper}>
      <h2>Kredit kalkulyatoru</h2>
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.card}>
            <label htmlFor="loan-amount">
              <span>Kredit məbləği</span> <span>{loanAmount} AZN</span>
            </label>
            <input
              type="range"
              id="loan-amount"
              min="1"
              max="35000"
              value={loanAmount}
              onChange={handleLoanAmountChange}
            />
          </div>
          <div className={styles.card}>
            <label htmlFor="loan-term">
              <span>Kredit müddəti</span> <span>{loanTerm} ay</span>
            </label>
            <input
              type="range"
              id="loan-term"
              min="1"
              max="60"
              value={loanTerm}
              onChange={handleLoanTermChange}
            />
          </div>
          <div className={styles.card}>
            <label htmlFor="interest-rate">
              <span>Faiz dərəcəsi</span> <span>{interestRate}%</span>
            </label>
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
            <span>İlkin hesablama</span>
          </div>
        </div>
        <div className={styles.right}>
          <div>
            <h2>Monthly Payment: ${monthlyPayment()}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
