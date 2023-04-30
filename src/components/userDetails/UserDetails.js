import React from 'react';
import {useLocation} from "react-router-dom";

const UserDetails = () => {

    const {state} = useLocation();


    return (
        <div>
            {JSON.stringify(state)}
        </div>
    );
};

export default UserDetails;