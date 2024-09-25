//import { cambiarTituloPagina } from "../helpers/CambiarTitulo";

//const PaginaTurno = () => {
//  cambiarTituloPagina("PaginaTurno");
//  return (
//    <>
//     <br />
//     <br />
//     <h1>REGISTRO TURNO</h1>
//   </>
// );
//};

//export default PaginaTurno;

import React, { useState } from "react";
import { cambiarTituloPagina } from "../helpers/CambiarTitulo";
import "../css/TurnoForm.css";
import { Container } from "react-bootstrap";

const veterinarios = [
  { id: 1, nombre: "Dr. Juan Pérez" },
  { id: 2, nombre: "Dra. María López" },
];

// Genera las horas en intervalos de 30 minutos
const generarHoras = (esSabado) => {
  const horas = [];
  const inicio = 9; // 9 am
  const fin = esSabado ? 14 : 20; // Sábados hasta las 14:00, de lunes a viernes hasta las 20:00
  for (let h = inicio; h <= fin; h++) {
    // Cambiado a <= para incluir la última hora completa
    if (h === fin && esSabado) {
      horas.push(`${h.toString().padStart(2, "0")}:00`); // Solo agrega las 14:00 si es sábado
    } else if (h < fin) {
      horas.push(`${h.toString().padStart(2, "0")}:00`);
      horas.push(`${h.toString().padStart(2, "0")}:30`);
    }
  }
  return horas;
};

const TurnoForm = ({ onAddTurno }) => {
  cambiarTituloPagina("PaginaTurno");
  const [detalle, setDetalle] = useState("");
  const [veterinario, setVeterinario] = useState(veterinarios[0].id);
  const [mascota, setMascota] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  // Calcular si es sábado
  const esSabado = (fecha) => {
    const dia = new Date(fecha).getDay();
    return dia === 6; // 6 es sábado
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTurno({ detalle, veterinario, mascota, fecha, hora });
    setDetalle("");
    setVeterinario(veterinarios[0].id);
    setMascota("");
    setFecha("");
    setHora("");
  };

  const horasDisponibles = fecha ? generarHoras(esSabado(fecha)) : [];

  return (
    <main className="mainform">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Registrar un Turno</h1>
          <div className="form-group">
            <label>Detalle de cita:</label>
            <input
              type="text"
              value={detalle}
              onChange={(e) => setDetalle(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Veterinario:</label>
            <select
              value={veterinario}
              onChange={(e) => setVeterinario(e.target.value)}
            >
              {veterinarios.map((vet) => (
                <option key={vet.id} value={vet.id}>
                  {vet.nombre}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Mascota:</label>
            <input
              type="text"
              value={mascota}
              onChange={(e) => setMascota(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Fecha:</label>
            <input
              type="date"
              value={fecha}
              onChange={(e) => setFecha(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Hora:</label>
            <select
              value={hora}
              onChange={(e) => setHora(e.target.value)}
              required
              disabled={!fecha} // Deshabilitar hasta que se seleccione una fecha
            >
              <option value="">Selecciona una hora</option>
              {horasDisponibles.map((horaDisponible, index) => (
                <option key={index} value={horaDisponible}>
                  {horaDisponible}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="submit-button">
            Agregar Turno
          </button>
        </form>
      </div>
    </main>
  );
};

const TurnosList = ({ turnos }) => {
  return (
    <div className="divcListaTurno">
      <h2>Lista de Turnos</h2>
      <ul>
        {turnos.map((turno, index) => (
          <li key={index}>
            <strong>Detalle:</strong> {turno.detalle},{" "}
            <strong>Veterinario:</strong>{" "}
            {veterinarios.find((vet) => vet.id === turno.veterinario).nombre},{" "}
            <strong>Mascota:</strong> {turno.mascota}, <strong>Fecha:</strong>{" "}
            {turno.fecha}, <strong>Hora:</strong> {turno.hora}
          </li>
        ))}
      </ul>
    </div>
  );
};

const Turnos = () => {
  const [turnos, setTurnos] = useState([]);

  const addTurno = (nuevoTurno) => {
    setTurnos([...turnos, nuevoTurno]);
  };

  return (
    <div>
      <h1>Gestión de Turnos Veterinaria</h1>
      <TurnoForm onAddTurno={addTurno} />
      <TurnosList turnos={turnos} />
    </div>
  );
};

export default Turnos;
