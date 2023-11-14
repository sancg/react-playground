import { Link } from "react-router-dom";

import FormTodo from "../components/form-todo";
const Todo = () => {
    return (
        <div>
            <h1>Todo System</h1>
            <Link to='/allPages'>All Pages</Link>
            <FormTodo />
        </div>
    );
};

export default Todo;
