import React, { useContext } from 'react'
import { NoteContext } from '../../Context/NoteContext'
import Note from '../Note/Note'


function AllNotes() {
  const { notes } = useContext(NoteContext);
  return (
    <div className='AllNotes'>
      {notes.map((n) => (
        <Note key={n.id} {...n}/>
          // Colocou um componente ("Note") ao invez de a para criar vários

      ))}
    </div>
  )
}

export default AllNotes

