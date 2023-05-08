import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {DEC, decrement, increment, INC, reset, RESET} from "./redux/action";


const App = () => {

    let store = useSelector(state => state);
    console.log(store);
    let dispatch = useDispatch();

    const onIncrement = () => {
        dispatch(increment());

    };

    const onDecrement = () => {
        dispatch(decrement());
    };

    const onReset = () => {
        dispatch(reset());
    };

    return (
        <div>
            <h1>{store}</h1>
            <button onClick={onIncrement}>INC</button>
            <button onClick={onDecrement}>DEC</button>
            <button onClick={onReset}>RES</button>
        </div>
    );
};

export default App;