import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";
import Comment from "../Comment/comment";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value =>{
                setComments([...value]);
            });

    }, [])

    return (
        <div>
            <div>
            <h3>Comments users</h3>
            <Outlet/>
            </div>

            <div>
                {
                    comments.map(value => <Comment item={value} key={value.id}/>)
                }
            </div>

        </div>
    );
};


export default Comments;