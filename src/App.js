// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)

// import './App.css'
// import React, {useState} from 'react';
// import Posts from "./components/posts/Posts";
// import FullPosts from "./components/posts/FullPosts/FullPosts";
//
// const App = () => {
//     let [postFull, setPostFull] = useState();
//     const variable = (obj) => {
//         setPostFull({...obj});
//     }
//     return (
//         <div className={'container'}>
//             <div className={'variable'}>
//                 <Posts variable={variable}/>
//             </div>
//             {
//                 postFull
//                 &&
//                 <div className={'postFull'}>
//                     <FullPosts value={postFull}/>
//                 </div>
//             }
//
//
//         </div>
//     );
// };
//
// export default App;

///////////////////////////////////////

// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
//     потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

// import React from 'react';
// import SpaceX from "./components/SpaceX/SpaceX";
// import './App.css'
//
//
// const App = () => {
//     return (
//         <div>
//             <SpaceX/>
//         </div>
//     );
// };
//
// export default App;

///////////////////////////////////////

// вивести всіх юзерів з плайсхолдеру
// в кожного юзера має бути кнопка яка буде показувати пости цього юзера
//
// пости мають виводитись під компонетою Users (в App компоненті)


// import React, {useState} from 'react';
// import Users from "./components/Users/Users";
// import FullUsers from "./components/FullUser/FullUsers";
//
// const App = () => {
//     let [userId, setUserId] = useState();
//     return (
//         <div>
//             <Users setUserId={setUserId}/>
//             {userId && <FullUsers userId={userId}/>}
//
//         </div>
//     );
// };
//
// export default App;