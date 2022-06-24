import { Action } from "./actions"

export type note = {
    body: string,
    id: number,
    status: boolean
}

export interface NoteState {
    notes: note[]
}
const initialState = {
    notes: []
}


export const NoteReducer = (state: NoteState = initialState, action: Action) => {
    switch (action.type) {
        case "ADD_NOTE":
            return { ...state, notes: [...state.notes, action.payload] }
        case "DELETE_NOTE":
            return { ...state, notes: state.notes.filter(note => note.id !== action.payload) }
        case "CHANGE_STATUS":
            return {
                ...state, notes: [...state.notes.filter(note => note.id !== action.payload.id), action.payload].sort(function (a, b) {
                    return (a.id - b.id);
                })
            }
        default:
            return state
    }
}