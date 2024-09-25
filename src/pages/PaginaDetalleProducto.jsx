import { useParams } from "react-router-dom";
import { useApiFakeStore } from "../helpers/apiFakestore";
import { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "../css/PaginaDetalleProducto.css";

const PaginaDetalleProducto = () => {
  const params = useParams();
  const [productoApi, setProductoApi] = useState({});

  const obtenerProducto = async () => {
    try {
      const producto = await useApiFakeStore(params.id);
      setProductoApi(producto);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtenerProducto();
  }, []);

  return (
    <>
      <br />
      <br />
      <br />
      <Container>
        <Row>
          <Col sm="12" md="6" className="col-izq text-center">
            <img src={productoApi?.image} alt="" />
            <p>{productoApi.description}</p>
          </Col>
          <Col
            sm="12"
            md="3"
            className="d-flex justify-content-center align-items-center text-center"
          >
            <div>
              <p className="fs-1">${productoApi?.price}</p>
              <Button variant="success" className="me-2">
                Añadir Favoritos
              </Button>
              <Button variant="primary">Añadir Carrito</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default PaginaDetalleProducto;
