import React, { useState } from 'react'
import { Todo } from '../store'
import { useTodosContext } from '../store'

const AddTodo = () => {
    const [newTodo, setNewTodo] = useState<Todo>({ id: 1, text: "", isComplate: false })
    const onchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTodo({ ...newTodo, text: e.target.value })
    }
    const [todos, setTodos] = useTodosContext();
    const onClickHandler = () => {
        if (newTodo.text !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo({ id: newTodo.id + 1, text: "", isComplate: false });
        }

    }
    const keydownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onClickHandler()
        }
    }
    return (
        <div>
            <input type="text" value={newTodo.text} onChange={onchangeHandler} onKeyDown={keydownHandler} />
            <button onClick={onClickHandler}>Add Todo</button>
        </div>
    )
}

export default AddTodo
