import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos: [],
    filteredTodos: []
}
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload)
        },
        toggleTodo: (state, action) => {
            const todo = state.todos.find(todo => todo.id === action.payload)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        editTodos: (state, action) => {
            const { id, newText } = action.payload
            const todosToEdit = state.todos.find(todo => todo.id === id)
            if (todosToEdit) {
                todosToEdit.text = newText
            }
        },
        removeTodos: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateSearchTodos: (state, action) => {
            state.todos = action.payload
        }
    }
})
export const { addTodo, toggleTodo, removeTodos, editTodos, updateSearchTodos } = todoSlice.actions
export default todoSlice.reducer