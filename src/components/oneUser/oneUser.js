import React from 'react';
import {Link} from "react-router-dom";

const OneUser = ({item}) => {
    return (
        <div>

                {item.id} {item.title} {item.completed}
            <hr/>

        </div>
    );
};

export default OneUser;