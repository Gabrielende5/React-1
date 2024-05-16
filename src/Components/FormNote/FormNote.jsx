import React, { useContext, useState } from 'react'
import './FormNote.css'
import { NoteContext } from '../../Context/NoteContext'

function FormNote() { // componente montando o formulario das notas

  const { note, addNote, setNote, IsEditing, setEditing, idEdit, setIdEdit, editNote } = useContext(NoteContext);
  // Importes do "NoteContext"
  const SendNote = (e) => {
    e.preventDefault();
    if (IsEditing) {
      editNote(idEdit);
    }
    else {
      addNote(note.title, note.description)
    }
    setEditing(false);
    setIdEdit("");
    setNote({ title: "", description: "" });
  }


  return (
    <div className="aside-notes">
      <form id="formNote" onSubmit={SendNote}>
        <label htmlFor="titleNote" className="margin-form">{" "} Título </label>
        <input
          type="text"
          className="margin-form"
          value={note.title}
          onChange={(e) =>
            setNote({ ...note, title: e.target.value })
          }
          id="titleNote"
          placeholder="Título"
        />
        <label htmlFor="descriptionNote" className="margin-form">{" "} Descrição </label>
        <input
          type="text"
          className="margin-form"
          value={note.description}
          onChange={(e) =>
            setNote({ ...note, description: e.target.value })
          }
          id="descriptionNote"
          placeholder="Descrição"
        />
        <button type="submit" id="buttonForm" className="margin-form" > Salvar Anotação </button>
      </form>
    </div>
  );
}

export default FormNote;	