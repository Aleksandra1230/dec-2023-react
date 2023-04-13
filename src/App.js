// 1. Описати всю сім'ю сімпсонів (5 персонажів)

import './App.css';
// import React from 'react';
// import {Simpsons} from "./components/users/Simpsons";
//
// const App = () => {
//     return (
//         <div>
//             <Simpsons/>
//         </div>
//     );
// };
//
// export default App;
//

// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
// https://rickandmortyapi.com/
//     https://rickandmortyapi.com/api/character
//         Створити 6 персонажів

import React from 'react';
import {Persons} from "./components/users/Persons";


const App = () => {
    return (
        <div>
           <Persons/>
        </div>
    );
};

export default App;