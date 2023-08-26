import React from 'react'
import { useSelector } from 'react-redux'

const Users = () => {
    const { name, age, study } = useSelector((state) => state.user)
    return (
        <div>
            user name: {name}
            user age: {age}
            user study: {study}
        </div>
    )
}

export default Users
