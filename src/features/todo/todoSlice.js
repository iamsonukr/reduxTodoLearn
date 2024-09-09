import { createSlice ,nanoid} from "@reduxjs/toolkit";


// it is the state
const initialState={
    todos:[{id:1, text:"Hello World"}]
}

// function for reducer
function sayHello(){
    console.log("Hello")
}


// Creating Slice here
export const todoSlice=createSlice({
    name:'todo',

    // Define the initial state of the redux
    initialState,

    // reducers consists of property and function
    reducers:{
        sample:sayHello,

        // in contextAPI we only declare the function not define it but in Redux toolkit we declare and define the function
        // function always take two parameter State and Action 
        // state gives the current state of the redux Action is used to get values to perform any action like ID to delete to delete a todo
        addTodo:(state, action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            const id=action.payload
            state.todos=state.todos.filter((item)=>item.id!=id)
        },
        updateTodo:(state,action)=>{
            const {id,text}=action.payload
            const todo=state.todos.find((item)=>item.id===id)
            if(todo){
                todo.text=text;
            }
        }
    }
})

// exporting the individual function which are allowed to update the state
export const {addTodo,removeTodo,updateTodo}=todoSlice.actions 

// exporting all the reducers
export default todoSlice.reducer