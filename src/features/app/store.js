import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import todosSlice from "../todos/todosSlice";

const store = configureStore({
    reducer: {
        todos: todosSlice
    },
})

export default store