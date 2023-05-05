import React from 'react';
import {useForm} from "react-hook-form";

const Dogs = ({useReducer1}) => {
    const {reset, register, handleSubmit} = useForm();
    const [{dogs}, dispatch] = useReducer1;

    const save = (dog) => {
        dispatch({type:'ADD_DOG', payload:dog})
        reset()

    };



    return (
        <div style={{display:'flex', justifyContent:'space-around', backgroundColor:'yellow'}}>
            <form onSubmit={handleSubmit(save)}>
                <input type={'text'} placeholder={'dog'} {...register('name')}/>
                <button>save</button>
            </form>
            {dogs.map(dog => <h4 key={dog.id}>{dog.name} <button onClick={()=> dispatch({type:'DOG'})}>Delete</button> </h4>)}

        </div>
    );
};


export default Dogs;