import { useState } from "react";

const initialList = [
  {
    id: 118836,
    name: "Jawad",
    image:
      "https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?size=626&ext=jpg&ga=GA1.2.1090466109.1726418483&semt=ais_hybrid",
    // image: "https://i.pravatar.cc/48?u=118836",
    balance: -70000,
  },
  {
    id: 933372,
    name: "Amira",
    image:
      "https://img.freepik.com/free-photo/3d-rendering-cartoon-like-woman-hijab_23-2150797666.jpg?ga=GA1.1.1090466109.1726418483&semt=ais_hybrid",
    // image: "https://i.pravatar.cc/48?u=933372",
    balance: 200000,
  },
  {
    id: 499476,
    name: "Abuli",
    // image: "https://i.pravatar.cc/48?u=499476",
    image:
      "https://img.freepik.com/free-psd/3d-render-avatar-character_23-2150611704.jpg?w=740&t=st=1726418505~exp=1726419105~hmac=62cf96269f1f1d0488012bf3c0e28bd168ae1e2660ce25fd6b569f44c1dff7f9",
    balance: 0,
  },
];

function Button({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  // NOTE Managing Array of Objects
  const [family, setFamily] = useState(initialList);

  // NOTE Boolean flags
  const [showAddFamily, setShowAddFamily] = useState(false);

  // NOTE Selected values
  const [selectedFamily, setSelectedFamily] = useState(null);

  function handleShowAddFamily() {
    setShowAddFamily((show) => !show);
  }

  function handleAddFamily(family) {
    setFamily((fam) => [...fam, family]);
    setShowAddFamily(false);
  }

  function handleSelection(family) {
    // NOTE setSelectedFamily(family);
    setSelectedFamily((selected) =>
      selected?.id === family.id ? null : family
    );
    setShowAddFamily(false);
  }

  // This function update Array items based on conditions
  function handleSplitBill(value) {
    setFamily((family) =>
      family.map((fam) =>
        fam.id === selectedFamily.id
          ? { ...fam, balance: fam.balance + value }
          : fam
      )
    );
    setSelectedFamily(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FamilyList
          family={family}
          selectedFamily={selectedFamily}
          onSelection={handleSelection}
        />

        {showAddFamily && <FormAddFamily onAddFamily={handleAddFamily} />}

        <Button onClick={handleShowAddFamily}>
          {showAddFamily ? "Close" : "Add family member"}
        </Button>
      </div>
      {selectedFamily && (
        <FormSplitBill
          selectedFamily={selectedFamily}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FamilyList({ family, onSelection, selectedFamily }) {
  // const family = initialList;
  return (
    <ul>
      {family.map((fam) => (
        <Family
          key={fam.id}
          fam={fam}
          selectedFamily={selectedFamily}
          onSelection={onSelection}
        />
      ))}
    </ul>
  );
}

function Family({ fam, onSelection, selectedFamily }) {
  const isSelected = selectedFamily?.id === fam.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={fam.image} alt={fam.name} />
      <h3>{fam.name}</h3>
      {fam.balance < 0 && (
        <p className="red">
          {`You owe ${fam.name}
          ${new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
          }).format(Math.abs(fam.balance))}`}
        </p>
      )}

      {fam.balance > 0 && (
        <p className="green">
          {`${fam.name} owes you
          ${new Intl.NumberFormat("en-NG", {
            style: "currency",
            currency: "NGN",
          }).format(fam.balance)}`}
        </p>
      )}

      {fam.balance === 0 && <p>{`You and ${fam.name} are even`}</p>}
      <Button onClick={() => onSelection(fam)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
}

function FormAddFamily({ onAddFamily }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = Date.now();
    const newFam = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFamily(newFam);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label>👨‍👩‍👦‍👦 Name:</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Isa Musa"
      />

      <label>📷 Image URL:</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Add</Button>
    </form>
  );
}

function FormSplitBill({ selectedFamily, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByUser);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFamily.name}</h2>

      <label>💵 Bill value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label>👨🏽‍💻 Your expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <label>👨🏽‍💻 {selectedFamily.name}'s expense</label>
      <input type="text" disabled value={paidByFriend} />

      <label>💵 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="fam">{selectedFamily.name}</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}
