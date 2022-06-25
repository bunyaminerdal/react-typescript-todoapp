import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNote, changeStatus, deleteNote } from './Redux/actions';
import { NewNoteInput } from './components/NewNoteInput';
import { note, NoteState } from './Redux/NoteReducer';

import "./App.css"


function App() {
  const notes = useSelector<NoteState, note[]>((state) => state.notes)
  const dispatch = useDispatch()

  const onAddNote = (note: note) => {
    dispatch(addNote(note))
  }
  const onDeleteNote = (id: number) => {
    dispatch(deleteNote(id))
  }
  const onStatusChange = (note: note, e: React.MouseEvent<HTMLSpanElement>) => {
    const newNote = { ...note, status: !note.status }
    dispatch(changeStatus(newNote))
  }
  return (
    <div className='box'>
      <NewNoteInput addNote={onAddNote} />
      <div className="inputs">
        <ul>
          {notes.map((note) => {
            return (
              <li key={note.id}>
                <label style={{ textDecorationLine: note.status ? "none" : "line-through", textDecorationColor: "red" }} onClick={(e) => onStatusChange(note, e)}>{note.body} </label>
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

export default App;
