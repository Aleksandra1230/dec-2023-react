import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Albums = () => {
    return (
        <div>
           <h3>Albums</h3>
            <ul>
                <li>
                    <Link to={'albums'}>Albums</Link>
                </li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default Albums;