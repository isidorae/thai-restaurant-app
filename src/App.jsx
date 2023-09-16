import './App.css'
import NavBar from './components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom';
import Inicio from './routes/Inicio'
import Menu from './routes/Menu'
import Delivery from './routes/Delivery'
import Contacto from './routes/Contacto'
import Reservas from './routes/Reservas';
import Footer from './components/Footer';


export default function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/thai-restaurant-app/' element={< Inicio/>} ></Route>
        <Route path='/thai-restaurant-app/contacto' element={< Contacto />} ></Route>
        <Route path='/thai-restaurant-app/delivery' element={ < Delivery />} ></Route>
        <Route path='/thai-restaurant-app/menu' element={< Menu />} ></Route>
        <Route path='/thai-restaurant-app/reservas' element={< Reservas />} ></Route>
        <Route path='/*' element={< Navigate to='/'/>} ></Route>
      </Routes>
      < Footer/>

    </>
  )
}

