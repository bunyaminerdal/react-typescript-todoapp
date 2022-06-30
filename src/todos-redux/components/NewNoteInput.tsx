import React, { ChangeEvent, useState } from 'react'
import { note } from '../NoteReducer';

interface NewNotInputProps {
  addNote(note: note): void;
}
const initNote = { id: 1, body: "", status: true }

export const NewNoteInput: React.FC<NewNotInputProps> = ({ addNote }) => {
  const [note, setNote] = useState<note>(initNote)


  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {

    setNote({ ...note, body: e.target.value })

  }
  const onAddNoteClick = () => {
    if (note.body.trim() !== "") {

      addNote(note);
      setNote({ ...initNote, id: note.id + 1 });
    }
  }
  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAddNoteClick()
    }
  }
  return (
    <div className='inputs'>
      <input value={note.body} onChange={updateNote} type="text" name="note" placeholder='Note...' onKeyDown={onKeyDownHandler} />
      <button onClick={onAddNoteClick}>Add Note</button>
    </div>
  )
}
