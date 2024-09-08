import { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date("8 September 2024");
  date.setDate(date.getDate() + count);

  function handleMinus() {
    setCount((c) => c - step);
  }
  function handlePlus() {
    setCount((c) => c + step);
  }

  return (
    <>
      <div>
        <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step: {step} </span>
        <button onClick={() => setStep((s) => s + 1)}>+</button>
      </div>

      <div>
        <button onClick={handleMinus}>-</button>
        <span>Count: {count < 0 ? `${Math.abs(count)}` : count} </span>
        <button onClick={handlePlus}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} day from today is`
            : `${Math.abs(count)} day ago was`}
        </span>
        <span> {date.toDateString()}</span>
      </p>
    </>
  );
}
