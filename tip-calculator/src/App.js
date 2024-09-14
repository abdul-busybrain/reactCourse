const billingInfo = [
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
  const data = billingInfo;
  return (
    <div>
      <BillInput />
      <Percentage>
        <select>
          <option>It was good </option>
        </select>
      </Percentage>
      <Output />
      <Reset />
    </div>
  );
}

function BillInput() {
  return (
    <div>
      <strong>How much was the bill?</strong>
      <input type="number" />
    </div>
  );
}

function Percentage() {
  return (
    <div>
      <strong>How do you like the service?</strong>
    </div>
  );
}

function Output() {
  return <div></div>;
}

function Reset() {
  return (
    <div>
      <button>Reset</button>
    </div>
  );
}
