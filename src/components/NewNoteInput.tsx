import React, { ChangeEvent, useState } from 'react'
import { note } from '../Redux/NoteReducer';

interface NewNotInputProps {
  addNote(note: note): void;
}
const initNote = { id: 0, body: "", status: true }

export const NewNoteInput: React.FC<NewNotInputProps> = ({ addNote }) => {
  const [idnumber, setIdnumber] = useState<number>(0)
  const [note, setNote] = useState<note>(initNote)


  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {

    const newNote = {
      id: idnumber,
      body: e.target.value,
      status: true
    }
    setNote(newNote)

  }
  const onAddNoteClick = () => {
    if (note.body.trim() !== "") {

      addNote(note);
      setNote(initNote);
      setIdnumber(idnumber + 1)
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
