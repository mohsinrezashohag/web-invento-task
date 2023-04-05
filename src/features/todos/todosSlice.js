import { createSlice } from "@reduxjs/toolkit";



const idGenerator = (state) => {
    const maxId = state?.todos?.reduce((maxId, item) => Math.max(item.id) + 1, 0)
    return maxId
}



const initialState = {
    todos: [],
    editItem: null
}

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

        setTodos: (state, action) => {
            state.todos = action.payload
        }
        ,
        addTodos: (state, action) => {
            state.todos.push({ id: idGenerator(JSON.parse(JSON.stringify(state))), ...action.payload })
        },

        editTodo: (state, action) => {
            const editTodo = state.todos.find(todo => todo.id === action.payload.id)
            editTodo.title = action.payload.data.title
            editTodo.completed = action.payload.data.completed
            state.todos.filter(todo => todo.id !== action.payload.id).push(editTodo)
            // return {
            //     ...state,
            //     todos: [...todos, { id: action.payload.id, ...action.payload.data }]
            // }
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },

        setEditItem: (state, action) => {
            state.editItem = action.payload
        }

    }
})


export const { setTodos, addTodos, editTodo, removeTodo, setEditItem } = todosSlice.actions
export default todosSlice.reducer