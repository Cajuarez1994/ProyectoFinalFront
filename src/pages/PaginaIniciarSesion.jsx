import FormC from "../components/FormC";
import { cambiarTituloPagina } from "../helpers/CambiarTitulo";
/*Props - son solo de lectura*/

const PaginaIniciarSesion = () => {
  /*JS */
  cambiarTituloPagina("PaginaInicioSesion");
  return (
    /* HTML -XML */
    <>
      <br />
      <div className="d-flex justify-content-center py-5">
        <FormC idPagina="IniciarSesion" />
      </div>
    </>
  );
};

export default PaginaIniciarSesion;
