import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "incrementAge":
      return { name: state.name, age: state.age + 1 };
    case "changeName":
      return { name: state.nextName, age: state.age };
    default:
      throw new Error("Unknown action:", action.type);
  }
}

const initialState = { name: "Abdullahi", age: 28 };

export default function Form() {
  const [{ age, name }, dispatch] = useReducer(reducer, initialState);

  function handleButtonClick() {
    dispatch({ type: "incrementAge" });
  }

  function handleInputChange(event) {
    dispatch({
      type: "changeName",
      nextName: event.target.value,
    });
  }

  return (
    <>
      <input value={name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <p>
        Hello, {name}. You are {age}.
      </p>
    </>
  );
}
