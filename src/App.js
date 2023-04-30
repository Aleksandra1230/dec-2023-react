import React from 'react';
import {Link, Route, Router, Routes} from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import About from "./components/About/About";
import Users from "./components/users/users";
import Posts from "./components/posts/posts";
import UserDetails from "./components/userDetails/UserDetails";
import PostDetails from "./components/postDetails/PostDetails";
import Todos from "./components/todos/Todos";
import Albums from "./components/Albums/Albums";
import Comments from "./components/comments/comments";
import OneUser from "./components/oneUser/oneUser";
import TodosUser from "./components/TodosUser/TodosUser";
import AlbumsDetails from "./components/AlbumsDetails/AlbumsDetails";
import CommentsDetails from "./components/CommentsDetails/CommentsDetails";

const App = () => {
    return (
        <div>

          <div>
            <h2>menu</h2>
            <ul>
              <li><Link to={'/todos'}>Todos</Link></li>
            </ul>

            <ul>
              <li><Link to={'/layout'}>layout</Link></li>
            </ul>

            <ul>
              <li><Link to={'/albums'}>Albums</Link></li>
            </ul>


          </div>

          <div>
            <h2>view</h2>
              <Routes>
                  <Route path={'/todos'} element={<Todos/>}>
                      <Route path={'todos'} element={<TodosUser/>}/>
                  </Route>


                  <Route path={'/albums'} element={<Albums/>}>
                      <Route path={'albums'} element={<AlbumsDetails/>}/>
                  </Route>



                  <Route path={'/layout'} element={<Layout/>}>

                      <Route path={'users'} element={<Users/>}>
                          <Route path={':id'} element={<UserDetails/>}/>
                      </Route>

                      <Route path={'posts'} element={<Posts/>}>
                          <Route path={':id'} element={<PostDetails/>}/>
                      </Route>

                      <Route path={'comments'} element={<Comments/>}>
                          <Route path={':id'} element={<CommentsDetails/>}/>
                      </Route>

                  </Route>




              </Routes>

          </div>

        </div>
    );
};

export default App;