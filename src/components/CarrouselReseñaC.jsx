import "../css/Reseñas.css";
import { Carousel, Card } from "react-bootstrap";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

// Datos de ejemplo de reseñas
const reseñas = [
  {
    id: 1,
    nombre: "María García",
    comentario: "Excelente atención, el Dr. Juan trató muy bien a mi mascota.",
    estrellas: 5,
  },
  {
    id: 2,
    nombre: "Carlos Fernández",
    comentario: "Buen servicio, aunque la espera fue un poco larga.",
    estrellas: 4,
  },
  {
    id: 3,
    nombre: "Ana López",
    comentario:
      "Me ayudaron con el tratamiento adecuado para mi perro, muy recomendados.",
    estrellas: 5,
  },
  {
    id: 4,
    nombre: "José Pérez",
    comentario: "El personal es muy amable y profesional.",
    estrellas: 4.5,
  },
];

// Función para generar las estrellas según la calificación
const generarEstrellas = (calificacion) => {
  const estrellas = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= calificacion) {
      estrellas.push(<FaStar key={i} style={{ color: "#FFD700" }} />); // Estrella llena
    } else if (i - 0.5 === calificacion) {
      estrellas.push(<FaStarHalfAlt key={i} style={{ color: "#FFD700" }} />); // Media estrella
    } else {
      estrellas.push(<FaRegStar key={i} style={{ color: "#FFD700" }} />); // Estrella vacía
    }
  }
  return estrellas;
};

const ReseñasCarousel = () => {
  return (
    <div className="reseñas-container my-0">
      <h2 className="text-center">Lo que nuestros clientes dicen</h2>
      {/* controls={false} desactiva las flechas laterales */}
      <Carousel controls={false}>
        {reseñas.map((reseña) => (
          <Carousel.Item key={reseña.id}>
            <Card className="text-center mx-auto" style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{reseña.nombre}</Card.Title>
                <Card.Text>{reseña.comentario}</Card.Text>
                <div className="reseña-estrellas">
                  {generarEstrellas(reseña.estrellas)}
                </div>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ReseñasCarousel;
