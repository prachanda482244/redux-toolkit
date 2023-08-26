import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo, removeTodos, editTodos } from './todoSlice'
const Todos = () => {
    const [input, setInput] = useState()
    const [editText, setEditText] = useState('')
    const [editingId, setEditingId] = useState(null)

    const dispatch = useDispatch()
    const { todos } = useSelector(state => state.todo)
    const AddTodo = () => {
        if (input.trim() !== '') {

            dispatch(addTodo({
                id: Date.now(),
                text: input,
                completed: false,
                something: false
            }))
            setInput('')
        }
        else {
            alert('Empty')
        }
    }
    const RemoveTodo = (id) => {
        dispatch(removeTodos(id))
    }

    const HandleEditTodo = (id, newText) => {
        dispatch(editTodos({ id, newText }))
        setEditText('')
        setEditingId(id)
    }
    const HandleStartEdit = (id, text) => {
        setEditingId(id);
        setEditText(text)
    }
    return (
        <div>
            Todo list
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={AddTodo}>Add todo</button>
            <div>
                <h2 className='bg-sky-400 text-center'>Results</h2>
                <div>
                    {
                        todos.length !== 0 ?
                            todos.map((todo) => (
                                <ul key={todo.id}>
                                    {
                                        editingId === todo.id ? (
                                            <div>
                                                <input type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />
                                                <button onClick={() => HandleEditTodo(todo.id, editText)}>edit</button>
                                                <button onClick={() => setEditingId(null)}>Cancel</button>
                                            </div>
                                        ) : (
                                            <div>
                                                <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
                                                <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
                                                <button onClick={() => HandleStartEdit(todo.id, todo.text)}>edit</button>
                                                <button onClick={() => RemoveTodo(todo.id)}>x</button>
                                            </div>
                                        )
                                    }
                                </ul>
                            ))
                            : <div>Nothing in todo</div>
                    }
                </div>
            </div>
        </div>
    )
}

export default Todos
