import { useState } from 'react';

export default function CountPage() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };
  const addNumberOnSubmit = (e) => {
    e.preventDefault();
    const augmentNumber = Number(e.currentTarget.elements[1].value);

    setCount((prev) => prev + augmentNumber);
  };
  return (
    <div>
      <h1>Counter at: {count}</h1>
      <div className="flex gap-2">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <form action="" onSubmit={(e) => addNumberOnSubmit(e)}>
        <fieldset className="flex flex-col">
          <label htmlFor="count_value">Add more!</label>
          <input type="number" name="count_value" id="count_value" />
        </fieldset>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
