import React from 'react'
import { useTodosContext } from '../store';

const TodoList = () => {
    const [todos, setTodos] = useTodosContext();
    const deleteHandler = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const complateHandler = (id: number) => {
        setTodos([...todos.map((todo) => {
            if (todo.id === id) {
                todo.isComplate = !todo.isComplate
            }
            return todo
        })])
    }
    return (
        <div>
            <ul className='todoList'>
                {todos.map((todo) => {
                    return <li key={todo.id} ><div onClick={() => complateHandler(todo.id)} className={`class-name-${todo.isComplate ? "complate" : "uncomplate"}`}>{todo.text}</div>  <button onClick={() => deleteHandler(todo.id)}> X</button></li>
                })}
            </ul>
        </div>
    )
}

export default TodoList
