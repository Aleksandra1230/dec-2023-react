import React from 'react';

const FullUser = ({post}) => {

    return (
        <div>
            <div>id: {post.id}</div>
            <div>title: {post.title}</div>
            <div>body: {post.body}</div>
            <div>userId: {post.userId}</div>


            
        </div>
    );
};

export default FullUser;