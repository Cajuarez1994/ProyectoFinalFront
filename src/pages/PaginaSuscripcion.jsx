import React, { useState } from "react";
import emailjs from "emailjs-com"; // Importa la librería EmailJS
import { cambiarTituloPagina } from "../helpers/CambiarTitulo";

const PaginaSuscripcion = ({ planId }) => {
  cambiarTituloPagina("PagSuscripcion");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Maneja los cambios en los inputs del formulario
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Función para enviar el correo usando EmailJS
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id", // Reemplaza con el ID de tu servicio en EmailJS
        "your_template_id", // Reemplaza con el ID de tu plantilla en EmailJS
        e.target,
        "your_user_id" // Reemplaza con tu User ID de EmailJS
      )
      .then(
        (result) => {
          alert(
            "Consulta enviada correctamente, nos pondremos en contacto pronto."
          );
        },
        (error) => {
          alert("Error al enviar la consulta, intenta nuevamente.");
        }
      );
  };

  return (
    <div>
      <h1>Consulta sobre el Plan</h1>
      <form onSubmit={sendEmail}>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje</label>
          <textarea
            name="message"
            className="form-control"
            rows="5"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Enviar Consulta
        </button>
      </form>
    </div>
  );
};

export default PaginaSuscripcion;
