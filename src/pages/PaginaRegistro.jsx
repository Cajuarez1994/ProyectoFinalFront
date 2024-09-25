import FormC from "../components/FormC";
import { cambiarTituloPagina } from "../helpers/CambiarTitulo";

const PaginaRegistro = () => {
  cambiarTituloPagina("PaginaRegistro");
  return (
    <>
      <br />
      <div className="d-flex justify-content-center py-5">
        <FormC idPagina={"registrarse"} />
      </div>
    </>
  );
};

export default PaginaRegistro;
