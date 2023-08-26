import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const HandleIncrement = () => {
        setCount(count + 1)
    }
    const HandleDecrement = () => {
        setCount(count - 1)

    }
    return (
        <div>
            <button onClick={HandleIncrement}>+</button>
            <span>Count: {count}</span>
            <button onClick={HandleDecrement}>-</button>
        </div>
    )
}

export default Counter
