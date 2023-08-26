import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    count: 0,
    name: 'Ramesh'
}
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1
            state.name = 'Incremented'
        },
        decrement: (state) => {
            state.count -= 1
            state.name = 'Decrement'
        },
        incrementByAmount: (state, action) => {
            state.count += action.payload
            state.name = action.payload
        },
        reset: (state) => {
            state.count = 0
        }
    }
})
export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions
export default counterSlice.reducer