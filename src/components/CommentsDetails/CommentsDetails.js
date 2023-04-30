import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

const CommentsDetails = () => {

    const {id} = useParams(null);

    const [comment, setComment] = useState();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments/' + id)
            .then(value => value.json())
            .then(value => {
                setComment({...value})
            });
    }, [id]);


    return (
        <div>
            {
                comment && JSON.stringify(comment)
            }

        </div>
    );
};

export default CommentsDetails;