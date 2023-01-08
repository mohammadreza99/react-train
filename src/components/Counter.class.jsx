import {Component} from "react";
import styles from './Counter.module.css';

class Counter extends Component {
    state = {
        counter: 0,
        name: 'mohammadReza'
    }

    // no need to bind this
    // inc = () => {
    //     this.setState({
    //         counter: 5
    //     })
    // }

    // need to bind this
    inc() {
        this.setState(prev => ({
            counter: ++prev.counter
        }))
    }

    render() {
        const {counter, name} = this.state;
        return (
            <>
                <h3 className={styles.h3}>class - {counter}</h3>
                <button onClick={this.inc.bind(this)}>Inc</button>
            </>
        )
    }
}

export default Counter;
