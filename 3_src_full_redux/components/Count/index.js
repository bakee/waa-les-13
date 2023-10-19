import {useEffect, useRef, useState} from "react";
import store from '../../redux/store';
import {createDecrementAction, createIncrementAction} from "../../redux/count-action";

export default function Count(){
    const [name, setName] = useState(null);
    const selectRef = useRef(); // {current: select}

    const increment = () => {
        store.dispatch(createIncrementAction(selectRef.current.value * 1));
    }

    const decrement = () => {
        store.dispatch(createDecrementAction(selectRef.current.value * 1));
    }

    const incrementIfOdd = () => {
        if(store.getState() % 2 !== 0){
            store.dispatch(createIncrementAction(selectRef.current.value * 1));
        }
    }

    const incrementAsync = () => {
        setTimeout(() => {
            store.dispatch(createIncrementAction(selectRef.current.value * 1));
        }, 1000);
    }

    return (
        <div>
            <h1>Count: {store.getState()}</h1>
            <select ref={selectRef}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>&nbsp;&nbsp;
            <button onClick={increment}>Increment</button> &nbsp;&nbsp;
            <button onClick={decrement}>Decrement</button>&nbsp;&nbsp;
            <button onClick={incrementIfOdd}>IncrementIfOdd</button>&nbsp;&nbsp;
            <button onClick={incrementAsync}>IncrementAsync</button>&nbsp;&nbsp;
        </div>
    )
}