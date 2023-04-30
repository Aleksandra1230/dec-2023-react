import React from 'react';
import {Link, Outlet} from "react-router-dom";


const Todos = () => {

    return (
        <div>
            <h3>todos user</h3>
            <ul>
                <li>
                    <Link to={'todos'}>Todos Users</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};


export default Todos;