import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: 'Prachanda',
    age: 22,
    study: 'Bca',
    language: ['js', 'react', 'node']
}
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        changeUserName: (state) => {
            state.name = 'Something'
        },
        changeAge: (state, action) => {
            state.age = action.payload
        },
        changeLanguage: (state) => {
            state.language.push('New Lanng')
        }
    }
})
export const { changeUserName, changeLanguage, changeAge } = userSlice.actions;
export default userSlice.reducer