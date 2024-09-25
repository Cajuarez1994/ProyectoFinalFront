import "../css/Contacto.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const PaginaContacto = () => {
  return (
    <main>
      <br />
      <Container className="mt-5">
        <Row className="contact-page">
          {/* Formulario de contacto */}

          <Col lg={6} md={12} className="mb-5">
            <h2>Contáctanos</h2>
            <Form method="post">
              <Form.Group className="mb-3" controlId="nombre">
                <Form.Label>Nombre:</Form.Label>
                <Form.Control type="text" name="nombre" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Correo electrónico:</Form.Label>
                <Form.Control type="email" name="email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="mensaje">
                <Form.Label>Mensaje:</Form.Label>
                <Form.Control as="textarea" rows={4} name="mensaje" required />
              </Form.Group>

              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </Form>
          </Col>

          {/* Información de contacto */}
          <Col lg={6} md={12}>
            <h2>Información de Contacto</h2>
            <p>
              Dirección: Gral. Jose Maria Paz 700, San Miguel de Tucumán,
              Argentina <br />
              Teléfono: +54 3814551542 <br />
              Correo electrónico: clinicavetodie@gmail.com
            </p>

            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.2568148587254!2d-65.2073616!3d-26.8384204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x942c3b6e5e4fbd81%3A0xf9b7e2e28f5124c3!2sGeneral%20Paz%20700%2C%20San%20Miguel%20de%20Tucum%C3%A1n%2C%20Argentina!5e0!3m2!1ses-419!2sar!4v1662587692511!5m2!1ses-419!2sar"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default PaginaContacto;
