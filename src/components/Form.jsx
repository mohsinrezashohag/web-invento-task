import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, editTodo, setEditItem } from '../features/todos/todosSlice';

const Form = () => {

    const { editItem } = useSelector(state => state.todos)
    const { todos } = useSelector(state => state.todos)



    // edit function
    let editItemData
    if (editItem) {
        editItemData = todos.find(todo => todo?.id === editItem)
    }




    // add form control
    const [input, setInput] = useState({
        title: "",
        completed: false,
    })


    // edit form control
    useEffect(() => {
        if (editItemData?.id) {
            setInput({
                title: editItemData?.title,
                completed: editItemData?.completed,
            })

        }
    }, [editItemData?.id])





    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!editItem) {
            dispatch(addTodos(input))
            setInput({
                title: "",
                completed: false,
            })
        }

        else {
            dispatch(editTodo({ id: editItemData.id, data: input }))
            dispatch(setEditItem(null))
            setInput({
                title: "",
                completed: false,
            })
        }

    }







    return (
        <>
            <h1 className='text-left font-bold py-3'> {editItem ? "Edit TODO" : "Add TODO"}</h1>

            {todos && <form onSubmit={handleSubmit}>

                <input
                    value={input?.title}
                    onChange={(e) => setInput({ ...input, title: e.target.value })}
                    className='p-3 rounded-md w-full bg-gray-300 capitalize'
                    type="text"
                    placeholder='Todo Title' />

                <div className="flex items-center py-4">
                    <input
                        checked={input?.completed}
                        onChange={(e) => setInput({ ...input, completed: e.target.checked })}
                        type="checkbox"
                        name="completed"
                    />

                    <label htmlFor="status" className="ml-2 text-sm"> Complete </label>


                </div>

                <button type='submit' className='bg-gray-500 px-6 py-2 rounded-lg text-white font-bold uppercase'> {editItem ? "Edit" : "Add"} </button>

            </form>}
        </>
    );
};

export default Form;