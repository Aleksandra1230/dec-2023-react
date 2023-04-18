import React, {useEffect, useState} from 'react';
import User from "../User/User";

const Users = ({setUserId}) => {

    let [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUser(value);
            });

    }, []);


    return (
        <>
            {
                user.map(value =>
                <User
                    value={value}
                    setUserId={setUserId}
                    key={value.id}/>)
                }

        </>
    );
};

export default Users;