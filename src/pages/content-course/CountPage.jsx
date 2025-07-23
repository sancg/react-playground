import { useReducer } from 'react';
import { Panel } from '../../components/ui/Panel';
// import useCounter from '../../hooks/content-course/use-counter';

const INCREASE_COUNT = 'increase-count';
const DECREASE_COUNT = 'decrease-count';
const VALUE_TO_ADD = 'value-to-add';
const ADD_ANY_NUMBER = 'add-any-number';

const reducer = (state, action) => {
  const opt = [
    {
      type: INCREASE_COUNT,
      action: () => {
        return { ...state, count: state.count + 1 };
      },
    },
    {
      type: DECREASE_COUNT,
      action: () => {
        return { ...state, count: state.count - 1 };
      },
    },
    {
      type: VALUE_TO_ADD,
      action: () => {
        return { ...state, valueToAdd: action.payload };
      },
    },
    {
      type: ADD_ANY_NUMBER,
      action: () => {
        return { ...state, count: state.count + action.payload };
      },
    },
  ];
  const updateState = opt.find(({ type }) => type === action.type);

  return updateState
    ? updateState.action()
    : { ...state, error: `Action not found: ${action.type}` };
};

export default function CountPage() {
  // const { count, increment, decrement, addNumberOnSubmit } = useCounter();
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    valueToAdd: 0,
  });

  const handleChange = (e) => {
    const value = Number(e.target.value);

    dispatch({ type: VALUE_TO_ADD, payload: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(state);
    dispatch({ type: ADD_ANY_NUMBER, payload: state.valueToAdd });
  };
  return (
    <Panel className="p-2">
      <h1>Counter at: {state.count}</h1>
      <div className="flex gap-2 m-2">
        <button onClick={() => dispatch({ type: INCREASE_COUNT })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: DECREASE_COUNT })}>
          Decrement
        </button>
      </div>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <fieldset className="flex flex-col">
          <label htmlFor="count_value">Add more!</label>
          <input
            value={state.valueToAdd || ''}
            onChange={(e) => handleChange(e)}
            type="number"
            name="count_value"
            id="count_value"
          />
        </fieldset>
        <button type="submit">Add</button>
      </form>
    </Panel>
  );
}
