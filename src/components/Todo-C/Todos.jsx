import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../../features/todo/todoSlice'


const Todos = () => {
    // we can directly get State inside the useSelector 
    const todos=useSelector(state=>state.todos)
    const dispatch=useDispatch()
  return (
    <div className='todos'>
        <h1>Todos</h1>
        {
            todos.map((item)=>(
                <div key={item.id}>
                <li>{item.text}</li>
                {console.log(item)}
                <button onClick={()=>dispatch(removeTodo(item.id))}>Delete</button>
                </div>
            ))
        }

    </div>
  )
}

export default Todos