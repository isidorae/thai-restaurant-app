import './App.css'
import NavBar from './components/NavBar'
import { Navigate, Route, Routes } from 'react-router-dom';
import Inicio from './routes/Inicio'
import Menu from './routes/Menu'
import Delivery from './routes/Delivery'
import Contacto from './routes/Contacto'
import Reservas from './routes/Reservas';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';
import CheckoutPage from './components/delivery/CheckoutPage';


export default function App() {

  return (
    <>
    <CartProvider>
      <NavBar />
      <Routes>
        <Route path='/' element={< Inicio/>} ></Route>
        <Route path='/contacto' element={< Contacto />} ></Route>
        <Route path='/delivery' element={ < Delivery />} ></Route>
        <Route path='/menu' element={< Menu />} ></Route>
        <Route path='/reservas' element={< Reservas />} ></Route>
        <Route path='/carrito' element={< CheckoutPage />} ></Route>
        <Route path='/*' element={< Navigate to='/'/>} ></Route>
      </Routes>
      < Footer/>
    </CartProvider>
    </>
  )
}

