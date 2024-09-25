import { Card, Col } from "react-bootstrap";
import "../css/CardC.css";
import { Link } from "react-router-dom";

const CardPlanesC = ({ urlImage, title, price, description, planId }) => {
  return (
    <>
      <Col sm="12" md="6" lg="4">
        <Card className="card-producto my-3">
          <Card.Img variant="top" src={urlImage} />
          <Card.Body>
            <Card.Title className="text-truncate">{title}</Card.Title>
            <Card.Text>${price}</Card.Text>
            <Card.Text className="text-truncate">{description}</Card.Text>
            <Link
              className="BotonCardPlan btn btn-danger"
              to={`/suscripcion/${planId}`}
            >
              Suscribirse
            </Link>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default CardPlanesC;
