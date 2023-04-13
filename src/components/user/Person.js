import React from 'react';

const Person = ({person}) => {
    const {id, name, status, species, gender, image} = person;
    return (
        <div>
            <h4>id:{id}</h4>
                <h2>{name}</h2>
            <h4>status:{status}</h4>
            <h4>species:{species}</h4>
            <h4>gender:{gender}</h4>
            <img src={image} alt={id} />
        </div>
    );
};

export {Person};