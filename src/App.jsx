import './App.css'
import Ventas from './componentes/Ventas'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Entrar from './componentes/Entrar'
import Menu from './componentes/Menu'
import Registro from './componentes/Registro'

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/Entrar' element={<Entrar />}/>
        <Route path='/Registro' element={<Registro />}/>
        <Route path='/ventas' element={<Ventas />}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
