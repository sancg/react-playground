import { useCallback, useState } from "react";

//Rewrite as an arrow function
const App = () => {
    const [newTodo, setNewTodo] = useState(""); // useState is an Array, thus it is used deconstructing ES6
    const onNewTodoChange = useCallback((event) => {
        // Cache version of the function onNewTodoChange
        //console.log(event.target.value);
        setNewTodo(event.target.value);
    }, []);

    const formSubmitted = (event) => {
        event.preventDefault();
    };

    // -------------------- END HOOKS ------------------------
    return (
        <div>
            <form className='createTodo' onSubmit={formSubmitted}>
                <label htmlFor='newTodo'>Enter a todo:</label>
                <input
                    id='newTodo'
                    name='newTodo'
                    value={newTodo}
                    onChange={onNewTodoChange}
                />
                <button type='submit' value='Send'>
                    Add task
                </button>
            </form>
        </div>
    );
};

export default App;
