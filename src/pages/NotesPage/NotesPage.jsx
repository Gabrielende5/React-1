import React, { useEffect } from 'react'
import { NoteProvider } from '../../Context/NoteContext'
import './NotesPage.css'
import FormNote from '../../Components/FormNote/FormNote'
import AllNotes from '../../Components/AllNotes/AllNotes'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'



function NotesPage() {

  const isLogged = useSelector((state =>state.user.isLogged));
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged == false){
      navigate("/login");
    }
  }, []);
// Sempre que tiver essa parte na pagina significa que n se pode entrar nessa pagina até estiver logado

  return (
    <NoteProvider>
        <div className='notePageContainer'>
            <FormNote/>
            <AllNotes/>
        </div>
    </NoteProvider>
  )
}

export default NotesPage
