import { useState } from 'react';
import './Counter.css'
import CounterButton from './CounterButton';

function Counter()
{

    let [counterState, setCounterState] = useState(0);
    return (
        <div className='counter'>
            <CounterButton sign={'-'} onClick={() => setCounterState(counterState-1)}/>
            <span>{counterState}</span>
            <CounterButton sign={'+'} onClick={() => setCounterState(counterState+1)}/>
        </div>
    )
}

export default Counter;
