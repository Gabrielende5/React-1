import { RouterProvider } from 'react-router-dom';
import './App.css';
import {router} from './router';

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>  {/* Ou seja, o index (o servidor) irá mostrar o que tem no app e o app ira mostrar as rotas */}
    </div>
  );
}

export default App;
