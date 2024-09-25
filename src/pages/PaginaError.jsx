import { cambiarTituloPagina } from "../helpers/CambiarTitulo";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/Error404.css";

const PaginaError = () => {
  cambiarTituloPagina("Error");
  return (
    <main className="mainError">
      <Container className="containerError d-flex flex-column justify-content-center align-items-center vh-100 text-center">
        <Row>
          <Col>
            <h1 className="Errorh1 display-4 text-danger mb-3">
              ¡Oops! Página no encontrada
            </h1>
            <p className="Errorp lead mb-4">
              Parece que tu mascota ha mordido el enlace equivocado.
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button variant="primary" href="/">
              Volver a Inicio
            </Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default PaginaError;

