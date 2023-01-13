import {useState} from "react";
import styles from './Counter.module.scss';

const Counter = () => {
    let [counter, setCounter] = useState(0)
    const inc = () => {
        setCounter(++counter)
    }
    return (
        <div className="p-3">
            <h3 className={styles.h3}>func - {counter}</h3>
            <button className="btn btn-primary" onClick={inc}>Inc</button>
        </div>
    )
}

export default Counter;
