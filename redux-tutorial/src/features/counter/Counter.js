import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount, reset } from './counterSlice'
import { changeAge } from '../users/userSlice'
const Counter = () => {
    const { count, name } = useSelector((state) => state.counter)
    const { color } = useSelector((state) => state.theme)
    const [age, setAge] = useState()

    const dispatch = useDispatch()
    const HandleIncrement = () => {
        dispatch(increment())
        dispatch(changeAge(age))
        setAge(count)
    }
    const HandleDecrement = () => {
        dispatch(decrement())
    }
    const HandleReset = () => {
        dispatch(reset())
    }
    const HandleIncrementBy10 = () => {
        dispatch(incrementByAmount(10))
    }

    return (
        <div>
            <span style={{ backgroundColor: color }}>Count: {count}</span>
            <br />
            <span>Name: {name}</span>
            <br />
            <button onClick={HandleIncrement}>+</button>
            <button onClick={HandleReset}>Reset</button>
            <button onClick={HandleIncrementBy10}>Increment by 10</button>
            <button onClick={HandleDecrement}>-</button>
        </div>
    )
}

export default Counter
