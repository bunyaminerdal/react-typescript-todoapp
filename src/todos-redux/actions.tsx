import { note } from "./NoteReducer"

export type Action = { type: "ADD_NOTE", payload: note } | { type: "DELETE_NOTE", payload: number } | { type: "CHANGE_STATUS", payload: number }

export const addNote = (note: note): Action => ({
    type: "ADD_NOTE",
    payload: note
})

export const deleteNote = (id: number): Action => ({
    type: "DELETE_NOTE",
    payload: id
})

export const changeStatus = (id: number): Action => ({
    type: "CHANGE_STATUS",
    payload: id
})