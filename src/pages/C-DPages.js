import React, {useReducer} from 'react';
import Cats from "../components/Cats/Cats";
import Dogs from "../components/Dogs/Dogs";


const reducer = (state, action) => {
    switch (action.type){
        case 'ADD_CAT':
            const cat = action.payload;
            const catId = state.cats.slice(-1)[0]?.id +1 || 1
            cat.id = catId
            return {...state, cats:[...state.cats, cat]}
        case 'ADD_DOG':
            const dog = action.payload;
            const dogId = state.dogs.slice(-1)[0]?.id +1 || 1
            dog.id = dogId
            return {...state, dogs:[...state.dogs, dog]}
        case 'DEL_CAT':
            const delCat = action.payload;
            const catIndex = state.cats.findIndex(value => value.id === delCat);
            state.cats.splice(catIndex, 1)
            return{...state};
        case 'DEL_DOG':
            const delDog = action.payload;
            const dogIndex = state.dogs.findIndex(value => value.id === delDog);
            state.dogs.splice(catIndex, 1)
            return{...state};
        default:
            return state;
    }
}
const CDPages = () => {

    const useReducer1 = useReducer(reducer,{cats:[], dogs:[]});

    return (
        <div>
            <Cats useReducer1={useReducer1}/>
            <Dogs useReducer1={useReducer1}/>
        </div>
    );
};

export default CDPages;