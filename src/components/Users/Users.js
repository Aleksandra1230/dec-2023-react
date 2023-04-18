import React, {useEffect, useState} from 'react';
import User from "../User/User";

const Users = (user) => {
    let [user, setUser] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUser(value)
            })

    }, []);


    return (
        <div>
            {user.map(user=><User key={user.id} user={user}/>)}

        </div>
    );
};

export default Users;