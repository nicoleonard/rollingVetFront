import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

function Menu() {
  return (
    <Navbar bg='danger' variant='dark' expand='lg'>
      <Container>
        <Navbar.Brand as={Link} to="/">RollingVet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end to={'/'} className={'nav-item nav-link'}>Inicio</NavLink>
            <NavLink end to={"/registro"} className={'nav-item nav-link'}>Registro</NavLink>
            <NavLink end to={"/login"} className={'nav-item nav-link'}>Iniciar Sesión</NavLink>
            <NavLink end to={'/'} className={'nav-item nav-link'}>Cerrar Sesión</NavLink>
            <NavLink end to={'/admin-pacientes'} className={'nav-item nav-link'}>Administrar pacientes</NavLink>
            <NavLink end to={'/admin-turnos'} className={'nav-item nav-link'}>Administrar turnos</NavLink>
            <NavLink end to={'/admin-servicios'} className={'nav-item nav-link'}>Administrar servicios</NavLink>
            <NavLink end to={'/nosotros'} className={'nav-item nav-link'}>Sobre nosotros</NavLink>
            <NavLink end to={'/contacto'} className={'nav-item nav-link'}>Contacto</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;