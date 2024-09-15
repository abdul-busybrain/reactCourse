import { useState } from "react";

let billingInfo = [
  {
    id: 0,
    title: "Dissatisfied",
    value: 0,
  },
  {
    id: 1,
    title: "It was okay",
    value: 5,
  },
  {
    id: 2,
    title: "It was good",
    value: 10,
  },
  {
    id: 3,
    title: "Absolutely amazing!",
    value: 20,
  },
];

export default function App() {
  return (
    <div>
      <TipCalculator />
    </div>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState("");
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  const handleReset = () => {
    setBill("");
    setPercentage1(0);
    setPercentage2(0);
  };

  return (
    <div>
      <BillInput bill={bill} onSetBill={setBill} />
      <SelectPercentage
        data={billingInfo}
        percentage={percentage1}
        onSelect={setPercentage1}
      >
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage
        data={billingInfo}
        percentage={percentage2}
        onSelect={setPercentage2}
      >
        How did your friend like the service?
      </SelectPercentage>
      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="number"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ data, percentage, onSelect, children }) {
  return (
    <div>
      <label> {children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        {data.map((bill) => (
          <option
            key={bill.id}
            value={bill.value}
          >{`${bill.title} (${bill.value}%)`}</option>
        ))}
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      <h3>
        You pay ₦{bill + tip} (₦{bill} + ₦{tip} tip){" "}
      </h3>
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
