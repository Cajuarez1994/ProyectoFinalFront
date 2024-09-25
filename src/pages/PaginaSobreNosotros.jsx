import React from "react";
import "../css/SobreNosotros.css";
import { cambiarTituloPagina } from "../helpers/CambiarTitulo";

const PaginaSobreNosotros = () => {
  cambiarTituloPagina("PaginaSobreNosotros");
  return (
    <>
      <main className="mainsobrenosotros">
        <div>
          <h1 class="nosotrosh1 text-center text-light mt-2">Nuestro Equipo</h1>
          <br />
          <p class="nosotrosp text-center text-light mt-2">
            Nosotros somos un equipo de desarrolladores que cursamos y
            aprendimos en RollingCode School. "Desde nuestra web, podras
            encontrar la facilidad para cuidar de tu mascota de forma simple y
            eficiente: agenda turnos en línea, compra los mejores productos para
            su bienestar y accede a atención veterinaria profesional desde
            cualquier lugar.Todo lo que necesitas para tu compañero, al alcance
            de un clic."
            <br />
            <br />
            <br />
          </p>
          <div class="row mt-5">
            <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
              <div class="text-center">
                <img src="../img/Francisco.jpg" alt="" class="card-image" />
              </div>
              <div class="text-center">
                <h3 class="text-light">Francisco Juarez - DEVELOPER</h3>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PaginaSobreNosotros;
