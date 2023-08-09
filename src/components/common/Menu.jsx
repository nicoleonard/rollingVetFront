import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
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
          <img src={logo} alt="Logo RollingVet" className="navbar-logo" />
        </Link>
        <Navbar.Brand as={Link} to="/">RollingVet</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-content-center">
            <NavLink end to={'/'} className={'nav-item nav-link'}>Inicio</NavLink>
            {
              (usuarioLogeado.usuario && usuarioLogeado.tipo === "admin") ?
                <>
                  <NavDropdown
                    title="Administrar"
                    menuVariant="dark"
                  >
                    <NavLink end to={'/admin-turnos'} className={'nav-item nav-link p-2'}>Administrar turnos</NavLink>
                    <NavDropdown.Divider />
                    <NavLink end to={'/admin-usuarios'} className={'nav-item nav-link p-2'}>Administrar usuarios</NavLink>
                    <NavDropdown.Divider />
                    <NavLink end to={'/admin-pacientes'} className={'nav-item nav-link p-2'}>Administrar pacientes</NavLink>
                    <NavDropdown.Divider />
                    <NavLink end to={'/admin-servicios'} className={'nav-link nav-link p-2'}>Administrar servicios</NavLink>
                  </NavDropdown>
                </> :
                (usuarioLogeado.usuario && usuarioLogeado.tipo === "usuario") ?
                  <NavLink end to="/reserva-turnos" className={'nav-item nav-link'}>Reserva de turnos</NavLink> : <></>

            }
            <NavLink end to={'/nosotros'} className={'nav-item nav-link'}>Sobre nosotros</NavLink>
            <NavLink end to={'/contacto'} className={'nav-item nav-link'}>Contacto</NavLink>
            {
              (!usuarioLogeado.usuario) ? <NavLink end to="/registro" className={'nav-item nav-link'}>Registrarse</NavLink> : <></>
            }
            {
              (!usuarioLogeado.usuario) ?
                <NavLink end to="/login" className={'nav-item nav-link'}>Login</NavLink> :
                <Link className={'nav-item nav-link'} onClick={logout}>Logout</Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;