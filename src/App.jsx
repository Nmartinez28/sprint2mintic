import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Entrar from './componentes/Entrar'
import Home from './componentes/Home'
import Menu from './componentes/Menu'
import Registro from './componentes/Registro'
import Listado_ordenes from './componentes/Listado_ordenes'
import Registro_ordenes from './componentes/Registro_ordenes'
import A_ordenes from './componentes/A_ordenes'

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/Entrar' element={<Entrar />}/>
        <Route path='/Registro' element={<Registro />}/>
        <Route path='/Listado_ordenes' element={<Listado_ordenes/>}/>
        <Route path='/Registro_ordenes' element={<Registro_ordenes/>}/>
        <Route path='/A_ordenes' element={<A_ordenes/>}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
