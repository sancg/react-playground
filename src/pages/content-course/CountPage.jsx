import { useReducer } from 'react';
import { Panel } from '../../components/ui/Panel';
import useCounter from '../../hooks/content-course/use-counter';

const reducer = (state, action) => {
  const opt = {
    IncreaseCount: () => {
      return { ...state, count: state.count + 1 };
    },
    DecreaseCount: () => {
      return { ...state, count: state.count - 1 };
    },
  };
  return opt[action]();
};

export default function CountPage() {
  const { count, increment, decrement, addNumberOnSubmit } = useCounter();
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0,
  });

  return (
    <Panel className="p-2">
      <h1>Counter at: {state.count}</h1>
      <div className="flex gap-2 m-2">
        <button onClick={() => dispatch('IncreaseCount')}>Increment</button>
        <button onClick={() => dispatch('DecreaseCount')}>Decrement</button>
      </div>
      <form action="" onSubmit={(e) => addNumberOnSubmit(e)}>
        <fieldset className="flex flex-col">
          <label htmlFor="count_value">Add more!</label>
          <input type="number" name="count_value" id="count_value" />
        </fieldset>
        <button type="submit">Add</button>
      </form>
    </Panel>
  );
}
