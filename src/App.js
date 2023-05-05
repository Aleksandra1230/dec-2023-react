import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import PostPages from "./pages/PostPages";
import CommentsPages from "./pages/CommentsPages";
import CDPages from "./pages/C-DPages";


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home/>}>
                <Route index element={<Navigate to={'posts'}/>}/>
                <Route path={'posts'} element={<PostPages/>}/>
                <Route path={'posts'} element={<PostPages/>}/>
                <Route path={'comments'} element={<CommentsPages/>}/>
                <Route path={'cats_dogs'} element={<CDPages/>}/>

            </Route>
            
        </Routes>
    );
};

export default App;