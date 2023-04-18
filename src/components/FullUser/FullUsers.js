import React, {useEffect, useState} from 'react';
import FullUser from "./FullUser";

const FullUsers = ({userId}) => {
    let [posts, setPosts] = useState([]);
    
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            })

        
    }, [userId])

    return (
        <div>
            {posts.map(post => <FullUser key={post.id} post={post}/>)}
        </div>
    );
};

export default FullUsers;