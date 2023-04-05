import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import { useDispatch, useSelector } from 'react-redux';
import { setTodos } from '../features/todos/todosSlice';

const Todos = () => {

    const { todos } = useSelector(state => state.todos)


    const dispatch = useDispatch()


    // set todos to local storage
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("todos", JSON.stringify(data))
                dispatch(setTodos(data))

            })
    }, [])

    // set todos to redux store



    return (
        <>
            <h1 className='text-left font-bold py-3'>TO DO LIST</h1>

            <div>

                {todos?.map(todo => <Todo key={todo.id} todo={todo}></Todo>)}

            </div>
        </>

    );
};

export default Todos;