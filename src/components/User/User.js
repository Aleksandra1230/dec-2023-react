import React from 'react';

const User = ({value, setUserId}) => {
    return (
        <div>
            <div>id: {value.id}</div>
            <div>name: {value.name}</div>
            <div>username: {value.username}</div>
            <div>email: {value.email}</div>
            <div>phone: {value.phone}</div>
            <div>website: {value.website}</div>  <br/>
            <button onClick={() => setUserId(value.id)}>posts</button>
            <br/>

        </div>
    );
};

export default User;