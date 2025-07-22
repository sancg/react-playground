import { useState } from 'react';

export default function CountPage() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  const decrement = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter at: {count}</h1>
      <div className="flex gap-2">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault;
        }}
      >
        <fieldset className="flex flex-col">
          <label htmlFor="count_value">Add more!</label>
          <input type="text" name="count_value" id="count_value" />
        </fieldset>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
