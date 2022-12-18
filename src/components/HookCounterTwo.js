import React, { useState } from 'react'

const HookCounterTwo = () => {
    const initialCount = 0
    const [counter, setCounter] = useState(initialCount)


    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCounter(function (prev) {
                return prev + 1
            })
        }
    }


    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(initialCount)}>reset</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
            <button onClick={incrementFive}>Increment 5</button>
        </div>
    )
}

export default HookCounterTwo