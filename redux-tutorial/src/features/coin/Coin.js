import React from 'react'
import { useSelector } from 'react-redux'

const Coin = () => {
    const { count } = useSelector((state) => state.counter)
    return (
        <div>
            <span>Coin: {count}</span>
        </div>
    )
}

export default Coin
