import React from "react";
import { Link } from "react-router-dom";
const LayoutHeader = () => {
    return (
        <header>
            <div>Logo</div>
            <nav>
                <div className='navigation'>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='allPage'>All</Link>
                        </li>
                        <li>
                            <Link to='favorite'>Favorite</Link>
                        </li>
                        <li>
                            <Link to='todo'>Todos</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default LayoutHeader;
