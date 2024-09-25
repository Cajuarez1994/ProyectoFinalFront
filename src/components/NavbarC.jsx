import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../css/Navbar.css";
import { NavLink } from "react-router-dom";

const NavbarC = () => {
  return (
    <>
      <Navbar expand="lg" fixed="top" className="custom-navbar">
        <Container>
          <NavLink to="/">
            <img
              src="../img/LogoVeterinaria.png"
              alt="Logo"
              width="100" // Reducido el tamaño del logo
              height="100"
              className="d-inline-block align-top mt-1"
              style={{ marginRight: "10px" }}
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Inicio
              </NavLink>
              <NavLink to="/sobre-nosotros" className="nav-link">
                Sobre Nosotros
              </NavLink>
              <NavLink to="/contacto" className="nav-link">
                Contacto
              </NavLink>
              <NavDropdown title="Turnos" id="basic-nav-dropdown">
                <NavDropdown.Item href="/Turnos">
                  Reservar Turno
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="ms-auto">
              <NavLink to="/iniciar-sesion" className="nav-link">
                Iniciar Sesion
              </NavLink>
              <NavLink to="/registro" className="nav-link">
                Registrarse
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarC;
