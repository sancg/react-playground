import { useState, useCallback, useRef } from 'react';

import Button from './ui/button';
const FormTodo = () => {
  const titleTodoRef = useRef();

  const [newTodo, setForm] = useState({}); // useState is an Array, thus it is used deconstructing ES6
  const onNewTodoChange = useCallback((event) => {
    // Cache version of the function onNewTodoChange
    //console.log(event.target.value);
    setForm(event.target.value);
  }, []);

  const formSubmitted = (event) => {
    event.preventDefault();
    setForm;
  };
  return (
    <form
      className="createTodo flex gap-1 flex-col mt-2"
      onSubmit={formSubmitted}
    >
      <label className="text-left" htmlFor="newTodo">
        Enter a todo:
      </label>
      <input
        className="p-3 rounded-lg"
        id="newTodo"
        ref={titleTodoRef}
        placeholder="Learn Nextjs"
      />
      {/* <Button type={"submit"}>Add</Button> */}
      <button
        className="p-2 bg-lime-200 text-black mt-3 w-1/2 mx-auto"
        type="submit"
      >
        Add
      </button>
    </form>
  );
};

export default FormTodo;
