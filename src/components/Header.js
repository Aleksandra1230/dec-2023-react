import React from 'react';
import {Link} from "react-router-dom";



const Header = () => {
    return (
        <div style={{display: 'flex', justifyContent: 'space-around', backgroundColor: 'darkgrey'}}>
            <h3><Link to={'posts'}>Posts</Link></h3>
            <h3><Link to={'comments'}>Comments</Link></h3>
            <h3><Link to={'cats_dogs'}>Cats and Dogs</Link></h3>
        </div>
    );
};

export default Header;