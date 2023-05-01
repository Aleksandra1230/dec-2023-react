import React, {useEffect, useState} from 'react';
import {postService} from "../service/post.service";

const Posts = ({flag}) => {
    
    const [posts, setPosts] = useState([]);

    useEffect(()=> {
        postService.getAll()
            .then(value => value.data)
            .then(value => setPosts(value))
        console.log('componentDidMount');
    }, [])

    useEffect(()=> {
        console.log('update');
        return () => {
            console.log('componentWillUnmount');
        }
    }, [posts])

    return (
        <div>
            {console.log('render')}
            Posts
        </div>
    );
};

export default Posts;