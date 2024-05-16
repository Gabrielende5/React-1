// Para que o "rfce" seja auto-completado precisa instalar as 4 primeiras extenções ao pesquisar "react"
import React, { useContext } from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
import { FaPen } from "react-icons/fa6";
import { NoteContext } from '../../Context/NoteContext';
import './Note.css'
function Note({ title, description, date, id }) {
  const { deleteNote, setNote, setEditing, setIdEdit } = useContext(NoteContext);
  function SubmitToEdit() {
    setEditing(true);
    setNote({ title, description });
    setIdEdit(id);
  }
  return (
    <div className='noteContainer'>
      <div className='title'>{title}</div>
      <div className='description'>{description}</div>
      <div className='edit' onClick={() => SubmitToEdit()}><FaPen fontSize={15} color='blue' /></div>
      <div className='delete' onClick={() => deleteNote()}><FaRegTrashAlt fontSize={15} color='red' /></div>
      <div className='date'>{date}</div>

    </div>
  )
}

export default Note;




