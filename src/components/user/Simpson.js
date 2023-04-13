import React from 'react';

const Simpson = ({simpson}) => {
    const {id, name, age, status, gender} = simpson;
    return (
        <div>
            <h2>id:{id}</h2>
            <h4>name:{name}</h4>
            <h4>age:{age}</h4>
            <h4>status:{status}</h4>
            <h4>gender:{gender}</h4>
        </div>
    );
};

export {Simpson};