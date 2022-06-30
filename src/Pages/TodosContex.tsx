import React from 'react'
import AddTodo from '../todos-contexHook/Components/AddTodo'
import { TodoContextProvider } from '../todos-contexHook/store'
import TodoList from '../todos-contexHook/Components/TodoList'

const TodosContext = () => {
    return (
        <div>
            < TodoContextProvider>
                <AddTodo />
                <TodoList />
            </TodoContextProvider>

        </div>
    )
}

export default TodosContext
