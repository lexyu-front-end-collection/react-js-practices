// import './UseState.css';
import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);

    const incr = () => {
        setCount(count + 1);
    };

    const decr = () => {
        setCount(count - 1);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div>
            <p className='text-2xl my-6 text-center'>{count}</p> 
            <div className="button-container flex justify-around">
                <button className="text-2xl" onClick={incr}>Increment</button>
                <button className="text-2xl" onClick={decr}>Decrement</button>
                <button className="text-2xl" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;