import { legacy_createStore } from "redux";
import { NoteReducer } from "./NoteReducer"

export const store = legacy_createStore(NoteReducer)