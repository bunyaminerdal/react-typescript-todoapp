import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addNote, changeStatus, deleteNote } from './Redux/actions';
import { NewNoteInput } from './components/NewNoteInput';
import { note, NoteState } from './Redux/NoteReducer';


function App() {
  const notes = useSelector<NoteState, NoteState["notes"]>((state) => state.notes)
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
    <>
      <NewNoteInput addNote={onAddNote} />
      <hr />
      <ul>
        {notes.map((note) => {
          return (
            <li key={note.id} style={{ minWidth: "200px", display: "flex", marginBottom: "10px" }}>
              <button style={{ marginRight: "10px", cursor: "pointer" }} onClick={() => onDeleteNote(note.id)}>delete</button>
              <span style={{ textDecorationLine: note.status ? "none" : "line-through", cursor: "pointer", textDecorationColor: "red" }} onClick={(e) => onStatusChange(note, e)}>{note.body} </span>
            </li>
          )
        })
        }
      </ul>
    </>
  );
}

export default App;
