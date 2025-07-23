import useCounter from '../../hooks/content-course/use-counter';
export default function CountPage() {
  const { count, increment, decrement, addNumberOnSubmit } = useCounter();

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
