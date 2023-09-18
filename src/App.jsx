import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import "./App.css";
import AllPage from "./pages/home";
import LayoutPage from "./pages/layout";
import NoPage from "./pages/not_found";
import Todo from "./pages/todo";

//Rewrite as an arrow function
const App = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path='/' element={<LayoutPage />}>
                <Route index path='allPage' element={<AllPage />} />
                <Route path='/todo' element={<Todo />} />
                <Route path='*' element={<NoPage />} />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export default App;
