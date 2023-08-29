import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './navBar.css'
import NavLogo from '/src/assets/img/thainamlogo.png'

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          {/* <Navbar.Brand  className="navbar-logo"><img className="navbar-logo" src={NavLogo} alt="" /><Nav.Link as={Link} to='/' ></Nav.Link></Navbar.Brand> */}
          <Nav.Link as={Link} to='/' ><img className="navbar-logo" src={NavLogo} alt="" /></Nav.Link>
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} className='fw-bold ' to='/' ></Nav.Link> */}
            <Nav.Link as={Link} className='fw-bold ' to='/menu'>MENU</Nav.Link>
            <Nav.Link as={Link} className='fw-bold ' to='/delivery'>DELIVERY</Nav.Link>
            <Nav.Link as={Link} className='fw-bold ' to='/reservas'>RESERVAS</Nav.Link>
            <Nav.Link as={Link} className='fw-bold ' to='/contacto'>CONTACTO</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
