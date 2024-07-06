import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

const AddTodo = () => {
    const [inputText,setInputText]=useState('')
    const dispatch=useDispatch()
     
    const addTodoHandler=(e)=>{
        e.preventDefault()
        dispatch(addTodo(inputText))
        setInputText('')
    }
  return (
    <div>
        <form onSubmit={addTodoHandler}>
            <input type="text" placeholder='Enter todo' value={inputText} onChange={(e)=>setInputText(e.target.value)} />
            <button type='submit' >Submit</button>
        </form>
    </div>
  )
}

export default AddTodo