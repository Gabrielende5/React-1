// "Context" é um componente que exporta funções 
import React, {createContext, useState} from 'react';
import {mockNotes} from "../mookData/mockNotes";
import { generateAtualDate } from '../helpers/generateAtualDate';
import { generateRandomId } from '../helpers/generateRandomId';


const NoteContext = React.createContext();
const NoteProvider = ({children}) => {
    const [notes, setNotes] = useState([...mockNotes]);
    const [note,setNote] = useState({title:"",description:""})
    const [IsEditing,setEditing] = useState(false);
    const [idEdit,setIdEdit] = useState("");
    const addNote = (description, title) => {
        setNotes([
             ...notes, // Mostrar todos as notas e colocar uma descrição, título e data 
            {id: generateRandomId(), title, description, date: generateAtualDate()},
        ])
        
    }
    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !==id));
    };
    const editNote = (id) => {
        setNotes(notes.map((n) => {
            if (n.id === id) {
                return {...notes,id:id,date:generateAtualDate()}; 
            } else {
                return n;
            }
        }))
    }
    return(
        <NoteContext.Provider value ={{notes, addNote, deleteNote, note, setNote, IsEditing, setEditing, idEdit, setIdEdit, editNote, setNotes}}>
            {children}  {/* {children} = Componente  */}
        </NoteContext.Provider>
    );
};

export {NoteProvider, NoteContext}
