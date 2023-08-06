import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from "../../assets/Logo.png";

const Menu = ({ usuarioLogeado, setUsuarioLogeado }) => {
  const navegacion = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('usuario');
    setUsuarioLogeado({});
    navegacion('/');
  }
  return (
    <Navbar className="fondoFooterAndMenu" variant='dark' expand='lg'>
      <Container>
        <Link to={'/'}>
        <img src={logo} alt="Logo RollingVet" className="navbar-logo"/>
        </Link>
        <Navbar.Brand as={Link} to="/">RollingVet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink end to={'/'} className={'nav-item nav-link'}>Inicio</NavLink>
            {
              (usuarioLogeado.usuario && usuarioLogeado.tipo === "admin") ?
                <>
                  <NavLink end to={'/admin-turnos'} className={'nav-item nav-link'}>Administrar turnos</NavLink>
                  <NavLink end to={'/admin-usuarios'} className={'nav-item nav-link'}>Administrar usuarios</NavLink>
                  <NavLink end to={'/admin-pacientes'} className={'nav-item nav-link'}>Administrar pacientes</NavLink>
                  <NavLink end to={'/admin-servicios'} className={'nav-item nav-link'}>Administrar servicios</NavLink>
                  <Button className={'nav-item nav-link'} variant='dark' onClick={logout}>Logout</Button>
                </> :
                (usuarioLogeado.usuario && usuarioLogeado.tipo === "usuario") ?
                  <Button className={'nav-item nav-link'} variant='primary' onClick={logout}>Logout</Button> : 
                  <NavLink end to="/login" className={'nav-item nav-link'}>Login</NavLink>
            }
            <NavLink end to={'/nosotros'} className={'nav-item nav-link'}>Sobre nosotros</NavLink>
            <NavLink end to={'/contacto'} className={'nav-item nav-link'}>Contacto</NavLink>
            {
              (!usuarioLogeado.usuario) ? <NavLink end to="/registro" className={'nav-item nav-link'}>Registrarse</NavLink> : <></>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;