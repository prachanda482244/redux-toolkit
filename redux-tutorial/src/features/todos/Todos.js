import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo, toggleTodo, removeTodos, editTodos, updateSearchTodos } from './todoSlice'
const Todos = () => {
    // Global States of rtk
    const { todos } = useSelector(state => state.todo)
    const { filteredTodos } = useSelector(state => state.todo)
    // Local State
    const [input, setInput] = useState('')
    const [editText, setEditText] = useState('')
    const [editingId, setEditingId] = useState(null)
    const [error, setError] = useState({ isError: false, msg: '' })
    const [searchQuery, setSearchQuery] = useState('')

    // To perform the action we use dispatch
    const dispatch = useDispatch()

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
            setError({ isError: true, msg: 'Input field cannot be empty' })
        }
    }
    const RemoveTodo = (id) => {
        dispatch(removeTodos(id))
    }
    const HandleInputChange = (e) => {
        setInput(e.target.value)
        setSearchQuery(e.target.value)
        setError({ isError: false, msg: '' })
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
    const SearchTodo = () => {
        const filteredTodos = todos.filter(todo => todo.text?.toLowerCase().includes(searchQuery?.toLowerCase()))
        dispatch(updateSearchTodos(filteredTodos))
        // console.log(filteredTodos)
        if (filteredTodos.length === 0) {
            setError({ isError: true, msg: 'Not found' })
        }
    }
    console.log(filteredTodos)

    return (
        <div className='flex flex-col justify-center  gap-2 '>
            <div className='flex items-center  font-medium justify-between  px-5 py-2 text-2xl '>
                <span className='text-fuchsia-900 '>Todo App</span>
                <span className=' '>Redux Toolkit</span>
            </div>
            <hr className='w-full  my-1' />
            <div className='md:w-11/12 flex sm:flex-col  lg:flex-row items-center justify-center mx-auto' >
                <input className='py-3 px-4 ring-2 ring-sky-400 sm:w-full  lg:w-3/4  mx-auto rounded-lg outline-none focus:ring-sky-600
             ' type="text" value={input} onChange={HandleInputChange} placeholder='Enter your todo here...' />

                <div className='flex  justify-between sm:mt-3 lg:mt-0 items-center gap-2  sm:w-full lg:w-auto'>
                    <button className='py-3 px-4 bg-sky-400 text-slate-100 mx-2 rounded-lg w=1/2  hover:bg-sky-600 shadow-lg' onClick={AddTodo}>Add todo</button>
                    <button className='py-3 px-4 bg-transparent text-sky-500 mx-2 rounded-lg w=1/2 ring-1 hover:ring-2 shadow-lg' onClick={SearchTodo}>Search Todo</button>
                </div>
            </div>
            <span className='text-center my-2 text-red-500 font-medium h-3 block'>{error.isError ? error.msg : ''}</span>
            <div className='flex flex-col relative'>
                <h2 className='bg-sky-400 text-center p-4 text-white uppercase '>Results</h2>
                <div className='grid lg:grid-cols-2 sm:grid-cols-1 gap-2 p-6'>
                    {
                        todos.length !== 0 ?
                            todos.map((todo, i) => (
                                <ul key={todo.id}>
                                    {
                                        editingId === todo.id ? (
                                            <div className='flex justify-between items-center  text-center ring-1 text-slate-600 font-medium tracking-tighter py-1 my-2  mx-auto rounded cursor-pointer px-2 '>
                                                <input className='py-3 px-4 ring-2 ring-sky-400 sm:w-full  lg:w-3/4  mx-auto rounded-lg outline-none focus:ring-sky-600' type="text" value={editText} onChange={(e) => setEditText(e.target.value)} />

                                                <button
                                                    className='py-1 mx-2 px-4 rounded outline-none text-white bg-sky-400 '
                                                    onClick={() => HandleEditTodo(todo.id, editText)}
                                                >
                                                    edit
                                                </button>

                                                <button
                                                    className=' text-red-900  rounded-lg hover:bg-red-700 hover:text-white hover:ring-opacity-10 mx-3 ring-1  px-4'
                                                    onClick={() => setEditingId(null)}
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        ) : (
                                            // Displaing the items

                                            <div className='flex justify-between items-center  text-center ring-1 text-slate-600 font-medium tracking-tighter py-3 my-2  mx-auto rounded cursor-pointer '>

                                                <div className='flex items-center  h-auto break-words lg:w-[90vw] px-5 text-left'>
                                                    <span className='lg:ring-1 rounded-full lg:w-8 lg:h-8 flex items-center justify-center'>
                                                        {i + 1}
                                                    </span>
                                                    <p className={`lg:ml-12 sm:ml-5  sm:w-40 lg:w-64 tracking-tight ${todo.completed ? 'line-through ' : 'no-underline'}`}>
                                                        {todo.text}
                                                    </p>
                                                </div>

                                                <div className={`px-4  w-32 ${todo.completed ? 'bg-green-500' : 'bg-red-500'} text-white font-medium py-1 rounded-md mx-3`}>
                                                    {todo.completed ? 'Completed' : 'Incomplete'}
                                                </div>

                                                {/* Edit check box and delete buttons */}

                                                <div className='flex sm:flex-col lg:flex-row items-center justify-center gap-2 sm:px-0 lg:px-4'>

                                                    <button
                                                        className='py-1 px-4 rounded outline-none text-white bg-sky-400 ' onClick={() => HandleStartEdit(todo.id, todo.text)}
                                                    >
                                                        edit
                                                    </button>

                                                    <button
                                                        className='text-xl text-red-900 lg:py-1  rounded-lg hover:bg-red-700 sm:w-14 lg:w-auto hover:text-white hover:ring-opacity-10 mx-3 ring-1  px-4'
                                                        onClick={() => RemoveTodo(todo.id)}
                                                    >
                                                        x
                                                    </button>

                                                    <button
                                                        className='h-5 flex items-center justify-center w-5 rounded-full overflow-hidden ring-2'
                                                    >
                                                        <input
                                                            className='h-10 w-10 '
                                                            type="checkbox"
                                                            checked={todo.completed}
                                                            onChange={() => dispatch(toggleTodo(todo.id))}
                                                        />
                                                    </button>
                                                </div>
                                            </div>

                                        )
                                    }
                                </ul>
                            ))
                            : <div className='text-center ring-1 text-slate-600 font-medium tracking-tighter py-3 my-2 w-9/12 mx-auto rounded cursor-pointer'>Nothing in todo</div>
                    }

                </div>
            </div>
        </div>
    )
}

export default Todos
