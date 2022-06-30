import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNote, changeStatus, deleteNote } from '../actions';
import { NewNoteInput } from './NewNoteInput';
import { note, NoteState } from '../NoteReducer';

import "./TodosRedux.css"

const Todoss = () => {
    const notes = useSelector<NoteState, note[]>((state) => state.notes)
    const dispatch = useDispatch()

    const onAddNote = (note: note) => {
        dispatch(addNote(note))
    }
    const onDeleteNote = (id: number) => {
        dispatch(deleteNote(id))
    }
    const onStatusChange = (id: number) => {
        dispatch(changeStatus(id))
    }
    return (
        <div className='box'>
            <NewNoteInput addNote={onAddNote} />
            <div className="inputs">
                <ul>
                    {notes.map((note) => {
                        return (
                            <li key={note.id}>
                                <label className={`class-name-${!note.status ? "complate" : "uncomplate"}`} onClick={() => onStatusChange(note.id)}>{note.body} </label>
                                <button onClick={() => onDeleteNote(note.id)}>X</button>
                            </li>
                        )
                    })
                    }
                </ul>
            </div>

        </div>
    );
}

export default Todoss
