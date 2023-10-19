import {useRef, useState} from "react";

export default function Count(){
    const [count, setCount] = useState(0);
    const selectRef = useRef(); // {current: select}

    const increment = () => {
        setCount(count + selectRef.current.value * 1);
    }

    const decrement = () => {
        setCount(count - selectRef.current.value * 1);
    }

    const incrementIfOdd = () => {
        if(count % 2 !== 0){
            setCount(count + selectRef.current.value * 1);
        }
    }

    const incrementAsync = () => {
        setTimeout(() => {
            setCount(count + selectRef.current.value * 1);
        }, 1000);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
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