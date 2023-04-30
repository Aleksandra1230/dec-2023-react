import React, {useEffect, useState} from 'react';
import OneUser from "../oneUser/oneUser";
import {Outlet} from "react-router-dom";

const TodosUser = () => {
    const  [todos, setTodos] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(value => value.json())
            .then(value => {
                setTodos([...value]);
            });
        return () => {
            console.log('done')
        }

    }, []);


    return (
        <div>
            {
                todos.map(value => <OneUser key={value.id} item={value}/>)
            }

            <Outlet/>
        </div>
    );
};

export default TodosUser;