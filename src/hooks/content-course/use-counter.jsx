import { useState } from 'react';

function useCounter() {
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
  return { count, increment, decrement, addNumberOnSubmit };
}
export default useCounter;
