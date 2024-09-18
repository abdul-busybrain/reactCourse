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
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  function handleAddItem(newItem) {
    setItems((prevItems) => [...prevItems, newItem]);
    setShowAddItem(false);
  }

  function handleShowAddItem() {
    console.log("Toggling showAddItem");
    setShowAddItem((show) => !show);
  }

  function handleShowPaymentForm() {
    setShowPaymentForm((show) => !show);
  }

  return (
    <div className="app">
      <div className="main-content">
        <div className="shopping-list">
          <ShoppingItems items={items} />

          {showAddItem && (
            <FormAddItem onAddItem={(newItem) => handleAddItem(newItem)} />
          )}

          <Button onClick={handleShowAddItem}>
            {showAddItem ? "Close" : "Add Item"}
          </Button>

          <Button onClick={handleShowPaymentForm}>Pay</Button>
        </div>

        {showPaymentForm && (
          <div className="payment-form">
            <PaymentForm />
          </div>
        )}
      </div>
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
          {(item.image || item.imageURL) && (
            <img src={item.image || item.imageURL} alt={item.name} />
          )}
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

        <label>Image URL:</label>
        <input
          type="url"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </form>
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
}

function PaymentForm() {
  return (
    <>
      <Button>Pay with wallet</Button>
      <p>Or pay with card</p>
      <label>Email:</label>
      <input type="email" />
      <label>Card information</label>
      <input type="text" placeholder="1234 1234 1234 1234" />
      <input type="date" placeholder="MM / YY" />{" "}
      <input type="text" placeholder="CVC" />
      <label>Name on card</label>
      <input type="text" placeholder="Isa Musa" />
      <label>Country in Africa</label>
      <select>
        <option>Nigeria</option>
        <option>Niger</option>
        <option>Benin Republic</option>
        <option>Egypt</option>
      </select>
      <Button>Submit</Button>
    </>
  );
}
