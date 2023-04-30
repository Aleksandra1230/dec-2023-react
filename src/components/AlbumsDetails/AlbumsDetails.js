import React, {useEffect, useState} from 'react';
import Album from "../Album/Album";
import {Outlet} from "react-router-dom";

const AlbumsDetails = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(value => value.json())
            .then(value => {
                setAlbums([...value]);
            });
        return () => {
            console.log('done')
        }
    }, []);


    return (
        <div>
            {
                albums.map(value => <Album key={value.id} item={value}/>)
            }
            <Outlet/>

        </div>
    );
};


export default AlbumsDetails;