import './App.css'
import Producto from './componentes/Producto'
import Ventas from './componentes/Ventas'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Cliente from './componentes/Cliente'
import Menu from './componentes/Menu'

function App() {

  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path='/' element={<h1>Home</h1>}/>
        <Route path='/producto' element={<Producto />}/>
        <Route path='/cliente' element={<Cliente />}/>
        <Route path='/ventas' element={<Ventas />}/>
        <Route path='*' element={<h1>Not Found</h1>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
