import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({item}) => {
    const navigate = useNavigate();
    return (
        <div>
            <div>
                {item.id}
                {item.name}
                {item.body}
                {item.email}

                <button onClick={() => {
                navigate(item.id.toString())
                }}>comments</button>
                <hr/>



            </div>
            
        </div>
    );
};

export default Comment;