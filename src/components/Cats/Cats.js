import React from 'react';
import {useForm} from "react-hook-form";


const Cats = ({useReducer1}) => {
    const {reset, register, handleSubmit} = useForm();
    const [{cats}, dispatch] = useReducer1;

    const save = (cat) => {
        dispatch({type:'ADD_CAT', payload:cat})
        reset()

    };



    return (
        <div style={{display:'flex', justifyContent:'center', backgroundColor:'blue'}}>
            <form onSubmit={handleSubmit(save)}>
                <input type={'text'} placeholder={'cat'} {...register('name')}/>
                <button>save</button>
            </form>
            {cats.map(cat => <h4 key={cat.id}>{cat.name} <button onClick={()=> dispatch({type:'DEL_CAT'})}>Delete</button> </h4>)}
            {

            }

        </div>
    );
};



export default Cats;