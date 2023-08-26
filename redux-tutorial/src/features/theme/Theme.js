import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { changeTextColor } from './themeSlice'
const Theme = () => {
    const dispatch = useDispatch()
    const [color, setColor] = useState('red')
    const ChangeColor = () => {
        dispatch(changeTextColor(color))
    }
    const HandleChange = (e) => {
        setColor(e.target.value)
    }
    return (
        <div>
            <br />
            <br />
            <br />
            <br />
            <input type="text" onChange={HandleChange} />
            <button onClick={ChangeColor}>ChangeTextColor</button>
            <p>{color}</p>
        </div>
    )
}

export default Theme
