import {useEffect, useRef, useState} from "react";
import store from '../../redux/store';
import {INCREMENT, DECREMENT} from "../../redux/constants";
export default function Count(){

    // const [something, setSomething] = useState(true);

    const selectRef = useRef(); // {current: select}

    // useEffect(() => {
    //     store.subscribe(() => {
    //         setSomething(!something);
    //     })
    // }, [something]);

    const increment = () => {
        store.dispatch({type: INCREMENT, data:selectRef.current.value * 1});
    }

    const decrement = () => {
        store.dispatch({type: DECREMENT, data:selectRef.current.value * 1});
    }

    const incrementIfOdd = () => {
        if(store.getState() % 2 !== 0){
            store.dispatch({type: INCREMENT, data:selectRef.current.value * 1});
        }
    }

    const incrementAsync = () => {
        setTimeout(() => {
            store.dispatch({type: INCREMENT, data:selectRef.current.value * 1});
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