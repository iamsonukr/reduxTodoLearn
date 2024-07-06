import { configureStore } from "@reduxjs/toolkit";

// importing the todoSlice.reducer from the slice
import TodoReducer from '../features/todo/todoSlice'

export const store=configureStore({

    reducer:TodoReducer
})