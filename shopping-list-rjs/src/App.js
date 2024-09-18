import { useState } from "react";

const initialList = [
  {
    id: 0,
    name: "Zanna Bukar",
    price: 22000,
    image: "/img/zanna.jpeg",
  },
  {
    id: 1,
    name: "Jallabiya",
    price: 19500,
    image: "/img/jallabiya.jpeg",
  },
  {
    id: 2,
    name: "iPhone 16 Pro",
    price: 1600000,
    image: "/img/i16.jpeg",
  },
];

function Button({ children, onClick }) {
  return (
    <button className="btn" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  console.log("Rendering App");

  // NOTE Managing Array of Objects
  const [items, setItems] = useState(initialList);

  // NOTE Boolean flags
  const [showAddItem, setShowAddItem] = useState(false);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
    setShowAddItem(false);
  }

  function handleShowAddItem() {
    console.log("Toggling showAddItem");
    setShowAddItem((show) => !show);
  }

  return (
    <div className="app">
      <ShoppingItems items={items} />

      {showAddItem && (
        <FormAddItem onAddItem={(newItem) => handleAddItem(newItem)} />
      )}

      <Button onClick={handleShowAddItem}>
        {showAddItem ? "Close" : "Add Item"}
      </Button>
    </div>
  );
}

function ShoppingItems({ items }) {
  return (
    <>
      <ul className="list">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </ul>
    </>
  );
}

function Item({ item }) {
  return (
    <>
      <li>
        <div className="item">
          <img src={item.image} alt={item.name} />
          <div className="item-info">
            <h3>{item.name}</h3>
            <p>
              {new Intl.NumberFormat("en-NG", {
                style: "currency",
                currency: "NGN",
              }).format(Math.abs(item.price))}
            </p>
            <div>
              <span className="btn-qtt">-</span>
              <input type="text" />
              <span className="btn-qtt">+</span>
            </div>
          </div>
          <span className="price">
            {new Intl.NumberFormat("en-NG", {
              style: "currency",
              currency: "NGN",
            }).format(Math.abs(item.price))}
          </span>
        </div>
      </li>
    </>
  );
}

function FormAddItem({ onAddItem }) {
  console.log("FormAddItem rendered");

  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    console.log("Form submitted");

    e.preventDefault();

    if (!name || !image) return;
    const id = Date.now();
    const newItem = {
      id,
      name,
      image,
      price: 2000,
    };
    onAddItem(newItem);

    setName("");
    setImage("");
  }
  return (
    <>
      <form className="add-item" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Ear pod"
        />

        <label>Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </form>
      <Button>Submit</Button>
    </>
  );
}

function PaymentForm() {}
