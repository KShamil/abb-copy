import React, { ChangeEvent, useState } from "react";
import styles from "./CurrencyConverter.module.scss";

type Currency = "AZN" | "USD" | "EUR" | "RUB";

type CurrencyRates = {
  [key in Currency]: number;
};

const currencyRates: CurrencyRates = {
  USD: 0.5875,
  EUR: 0.5205,
  RUB: 40.6504,
  AZN: 1,
};

export const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<Currency>("AZN");
  const [toCurrency, setToCurrency] = useState<Currency>("USD");

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(event.target.value));
  };

  const handleFromCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFromCurrency(event.target.value as Currency);
  };

  const handleToCurrencyChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setToCurrency(event.target.value as Currency);
  };

  const convertCurrency = () => {
    const convertedAmount =
      amount * (currencyRates[toCurrency] / currencyRates[fromCurrency]);
    return convertedAmount.toFixed(2);
  };

  return (
    <section className={styles.wrapper}>
      <h2>Valyuta məzənnələri</h2>
      <div className={styles.content}>
        <div className={styles.left}>
          <table>
            <thead>
              <tr>
                <th>Valyuta</th>
                <th>Satış</th>
                <th>Alış</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.currency}>USD</td>
                <td>1.7020</td>
                <td>1.6970</td>
              </tr>
              <tr>
                <td className={styles.currency}>EUR</td>
                <td>1.9214</td>
                <td>1.8272</td>
              </tr>
              <tr>
                <td className={styles.currency}>RUB</td>
                <td>0.0246</td>
                <td>0.0182</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.right}>
          <h4>Valyuta konvertoru</h4>
          <div className={styles.inputs}>
            <div className={styles.inputContainer}>
              <input
                placeholder="Satıram"
                type="number"
                value={amount}
                onChange={handleAmountChange}
              />
              <select value={fromCurrency} onChange={handleFromCurrencyChange}>
                {Object.keys(currencyRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
            <div className={styles.inputContainer}>
              <input
                placeholder="Alıram"
                type="number"
                value={`${convertCurrency()}`}
              />
              <select value={toCurrency} onChange={handleToCurrencyChange}>
                {Object.keys(currencyRates).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
