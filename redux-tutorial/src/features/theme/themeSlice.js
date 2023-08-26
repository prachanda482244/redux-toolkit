import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    color: ''
}
const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        changeTextColor: (state, action) => {
            state.color = action.payload
        }
    }
})
export const { changeTextColor } = themeSlice.actions
export default themeSlice.reducer