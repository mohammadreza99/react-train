import {useState} from "react";
import styles from './Counter.module.css';

const Counter = () => {
    let [counter, setCounter] = useState(0)
    const inc = () => {
        setCounter(++counter)
    }
    return (
        <>
            <h3 className={styles.h3}>func - {counter}</h3>
            <button onClick={inc}>Inc</button>
        </>
    )
}

export default Counter;
