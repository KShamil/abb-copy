import React, { ChangeEvent, useState } from "react";
import styles from "./CurrencyConverter.module.scss";

interface CurrencyRates {
  [key: string]: { buy: number; sell: number };
}

export const CurrencyConverter: React.FC = () => {
  const [inputAmount, setInputAmount] = useState<string>("");
  const [outputAmount, setOutputAmount] = useState<string>("");
  const [selectedCurrency, setSelectedCurrency] = useState<string>("USD");
  const [selectedCurrencyOutput, setSelectedCurrencyOutput] =
    useState<string>("EUR");

  const currencyRates: CurrencyRates = {
    USD: { buy: 1.702, sell: 1.697 },
    EUR: { buy: 1.8927, sell: 1.7999 },
    RUB: { buy: 0.0239, sell: 0.0177 },
    AZN: { buy: 1, sell: 1 },
  };

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement>,
    inputType: string
  ) => {
    const amount = e.target.value;
    setInputAmount(amount);

    // Выполняем конвертацию при вводе числа в любой из инпутов
    if (!isNaN(Number(amount))) {
      const currency = currencyRates[selectedCurrency];
      const currencyOutput = currencyRates[selectedCurrencyOutput];
      let convertedAmount: number;
      if (inputType === "inputAmount") {
        convertedAmount = Number(amount) * currency.sell;
        setOutputAmount(convertedAmount.toFixed(2));
      } else if (inputType === "outputAmount") {
        convertedAmount = Number(amount) / currency.buy; // Изменяем на обратное деление
        setInputAmount((convertedAmount * currencyOutput.buy).toFixed(2));
      }
    } else {
      setOutputAmount("");
    }
  };

  const handleCurrencyChange = (
    e: ChangeEvent<HTMLSelectElement>,
    inputType: string
  ) => {
    if (inputType === "inputAmount") {
      setSelectedCurrency(e.target.value);
    } else if (inputType === "outputAmount") {
      setSelectedCurrencyOutput(e.target.value);
    }
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
            {Object.keys(currencyRates).map((currency) => (
              <tbody key={currency}>
                <tr>
                  <td>{currency}</td>
                  <td>{currencyRates[currency].sell}</td>
                  <td>{currencyRates[currency].buy}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <div className={styles.right}>
          <h4>Valyuta konvertoru</h4>
          <div className={styles.inputs}>
            <div className={styles.inputContainer}>
              <input
                placeholder="Satıram"
                type="text"
                value={inputAmount}
                onChange={(e) => handleInputChange(e, "inputAmount")}
              />
              <select
                value={selectedCurrency}
                onChange={(e) => handleCurrencyChange(e, "inputAmount")}
              >
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
                type="text"
                value={outputAmount}
                onChange={(e) => handleInputChange(e, "outputAmount")}
              />
              <select
                value={selectedCurrencyOutput}
                onChange={(e) => handleCurrencyChange(e, "outputAmount")}
              >
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

export default CurrencyConverter;
