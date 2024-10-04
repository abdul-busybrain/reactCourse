import { useEffect, useState } from "react";

// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  //NOTE Array of available currencies
  const currencies = ["USD", "EUR", "CAD", "INR"];

  useEffect(
    function () {
      //NOTE Function to fetch conversion rate and update state
      async function convertCurrency() {
        setIsLoading(true);
        try {
          const response = await fetch(
            `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
          );
          const data = await response.json();
          console.log(data);
          setConvertedAmount(data.rates[toCurrency]);
        } catch (error) {
          console.error("Error fetching conversion rate:", error);
        } finally {
          setIsLoading(false);
        }
      }

      //NOTE Only convert if we have a valid amount
      if (amount > 0) {
        convertCurrency();
      } else {
        setConvertedAmount(0);
      }
    },
    [amount, fromCurrency, toCurrency]
  ); //NOTE Run effect when these values change

  //NOTE Handle amount/input change
  function handleAmountChange(e) {
    const value = e.target.value;
    setAmount(value === "" ? "" : Number(value));
  }

  // NOTE Currency selection changes
  //NOTE To swap currencies if the new selection matched the other dropdown
  function handleFromCurrencyChange(e) {
    const newFromCurrency = e.target.value;
    if (newFromCurrency === toCurrency) {
      setToCurrency(fromCurrency);
    }
    setFromCurrency(newFromCurrency);
  }

  // NOTE Currency selection changes
  // NOTE To swap currencies if the new selection matches the other dropdown
  function handleToCurrencyChange(e) {
    const newToCurrency = e.target.value;
    if (newToCurrency === fromCurrency) {
      setFromCurrency(toCurrency);
    }
    setToCurrency(newToCurrency);
  }

  return (
    <div className="App">
      <h1>Currency Converter</h1>

      <input
        type="text"
        value={amount}
        onChange={handleAmountChange}
        placeholder="Enter amount"
      />

      <select
        value={fromCurrency}
        onChange={handleFromCurrencyChange}
        disabled={isLoading}
      >
        {/* NOTE Filter out the currency selected in the 'to' dropdown */}
        {currencies
          .filter((currency) => currency !== toCurrency)
          .map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
      </select>

      <select
        value={toCurrency}
        onChange={handleToCurrencyChange}
        disabled={isLoading}
      >
        {/* NOTE Filter out the currency selected in the 'from' dropdown */}
        {currencies
          .filter((currency) => currency !== fromCurrency)
          .map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
      </select>

      {isLoading ? (
        <p>Converting...</p>
      ) : (
        <p>
          The conversion rate of {amount} {fromCurrency} is equal to {""}
          {convertedAmount.toFixed(2)} {toCurrency}
        </p>
      )}
    </div>
  );
}
