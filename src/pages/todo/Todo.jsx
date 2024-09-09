import React from 'react'
import './Todo.css'
import AddTodo from '../../components/Todo-C/AddTodo'
import Todos from '../../components/Todo-C/Todos'


const Todo = () => {
  return (
    <div>
        <AddTodo/>
        <Todos/>
    </div>
  )
}

export default Todo