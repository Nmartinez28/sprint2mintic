import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Entrar from './componentes/Entrar'
import Menu from './componentes/Menu'
import Registro from './componentes/Registro'
import Listado_ordenes from './componentes/Listado_ordenes'

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/Entrar' element={<Entrar />}/>
        <Route path='/Registro' element={<Registro />}/>
        <Route path='/Listado_ordenes' element={<Listado_ordenes/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
