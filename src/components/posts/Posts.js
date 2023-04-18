import React, {useEffect, useState} from 'react';
import Post from "../post/Post";

const Posts = ({variable}) => {

    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value);
            })

    }, [])



    return (
        <>
            {
                posts.map(value =>
                    <Post
                        value={value}
                        variable={variable}
                        key={value.id}/>)

            }

        </>
    );
};

export default Posts;