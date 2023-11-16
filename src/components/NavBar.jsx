import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navBar.css'
import NavLogo from '/src/assets/img/thainamlogo.png'
import { useContext } from 'react'
import CartContext from '../context/CartContext';

export default function NavBar() {

  const {totalItemsInCart} = useContext(CartContext)


  return (
    <>
    <div className="navbarcontainer">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav.Link as={Link} to='/thai-restaurant-app/' ><img className="navbar-logo" src={NavLogo} alt="" /></Nav.Link>
          <Nav className="me-auto">
            <Nav.Link as={Link} className='fw-bold ' to='/menu'>MENU</Nav.Link>
            <Nav.Link as={Link} className='fw-bold ' to='/delivery'>DELIVERY</Nav.Link>
            <Nav.Link as={Link} className='fw-bold ' to='/reservas'>RESERVAS</Nav.Link>
            <Nav.Link as={Link} className='fw-bold ' to='/contacto'>CONTACTO</Nav.Link>
          </Nav>
          <Link to='/carrito'>
                <button title="ver carrito" className="cart-navbar-button me-2">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20" height="20"
                    fill="currentColor"
                    className="bi bi-basket-fill"
                    viewBox="0 0 16 16">
                    <path d="M5.071 1.243a.5.5 0 0 1 .858.514L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5H15v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9H.5a.5.5 0 0 1-.5-.5v-2A.5.5 0 0 1 .5 6h1.717L5.07 1.243zM3.5 10.5a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3zm2.5 0a.5.5 0 1 0-1 0v3a.5.5 0 0 0 1 0v-3z"/>
                    </svg>
                    <div className="cart-product-num text-white">{totalItemsInCart ? totalItemsInCart : 0}</div>
              </button>
              </Link>
        </Container>
      </Navbar>
      </div>
    </>
  );
}
