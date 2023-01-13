import {Component} from "react";
import styles from './Counter.module.scss';

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
            <div className="p-3">
                <h3 className={styles.h3}>class - {counter}</h3>
                <button onClick={this.inc.bind(this)}>Inc</button>
            </div>
        )
    }
}

export default Counter;
