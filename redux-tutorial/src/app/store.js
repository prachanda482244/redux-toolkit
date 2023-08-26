import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import userReducer from '../features/users/userSlice'
import themeReducer from '../features/theme/themeSlice'
import todoSlice from '../features/todos/todoSlice'
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        theme: themeReducer,
        todo: todoSlice
    }
})