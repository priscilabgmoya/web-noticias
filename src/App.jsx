import './App.css'
import Tiitulo from './components/TItulo/Titulo'
import Formulario from './components/Formulario/Formulario';
import { Route, Routes } from 'react-router-dom';
import NewApiNoticia from './components/NewApiNoticia/NewApiNoticia';
import { useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate()
  const navegarOpciones = (pais) => {
    navigate(`/${pais}`); 
  }
  return (
    <div className='container'>
      <Tiitulo title='Noticias'/> 
      <Formulario navegar={navegarOpciones} />
       <Routes>
        <Route path='/argentina' 
        element= {<NewApiNoticia  urlApi="https://newsdata.io/api/1/news?country=ar&apikey=pub_25842d657238c9ad6a9869121b8e7c9ff0708"/>} />
        <Route  path='/corea-del-sur' 
        element ={<NewApiNoticia  urlApi="https://newsdata.io/api/1/news?country=kr&apikey=pub_25842d657238c9ad6a9869121b8e7c9ff0708" />} />
        <Route  path='/bangladesh' 
        element ={<NewApiNoticia urlApi="https://newsdata.io/api/1/news?country=bd&apikey=pub_25842d657238c9ad6a9869121b8e7c9ff0708" />} />
       </Routes>
    </div>
  )
}

export default App
