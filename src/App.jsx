import { useState } from 'react'
import './App.css'
import NavBar from "./components/NavBar/NavBar.jsx"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx"

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/productos.html', label: 'Productos' },
  { href: '/contacto.html', label: 'Contacto' },
];

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar logo="src/assets/logo.png" links={links}></NavBar>
      <ItemListContainer titulo="Nuestros proyectos"></ItemListContainer>
    </>
    
  )
}

export default App
