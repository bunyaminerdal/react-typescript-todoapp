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
                ...state, notes: state.notes.map((note, index) => {
                    if (index == action.payload.id) {
                        note.status = action.payload.status
                    }
                    return note
                })
            }
        default:
            return state
    }
}