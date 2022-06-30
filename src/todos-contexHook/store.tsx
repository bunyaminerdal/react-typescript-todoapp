import React, { createContext, useContext, useState } from "react"

export interface Todo {
    id: number,
    text: string,
    isComplate: boolean
}


const useTodos = (initialTodos: Todo[]) => useState<Todo[]>(initialTodos);

type UseTodosType = ReturnType<typeof useTodos>;

const TodosContext = createContext<UseTodosType | null>(null);

export const useTodosContext = () => useContext(TodosContext)!;

export const TodoContextProvider = ({ children }: { children: React.ReactNode }) => {
    return <TodosContext.Provider value={useTodos([])}> {children}</TodosContext.Provider>
}