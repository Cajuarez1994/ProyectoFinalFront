import CarouselC from "../components/CarouselC";
import CardC from "../components/CardC";
import "../css/Principal.css";
import { cambiarTituloPagina } from "../helpers/CambiarTitulo";
import { useApiFakeStore } from "../helpers/apiFakestore";
import { useEffect, useState } from "react";
import CardPlanesC from "../components/CardPlanesC";
import ReseñasCarousel from "../components/CarrouselReseñaC";

/*use - hooks = funcion / metodo */
const PaginaPrincipal = () => {
  /*JS- Logica del componente */
  /*const [estado, funcionqueseteaelvalordelestado] = useState([estado, setEstado]); */
  const [productosApi, setProductosApi] = useState([]);
  cambiarTituloPagina("PaginaPrincipal");

  const obtenerProductos = async () => {
    try {
      const productos = await useApiFakeStore();
      setProductosApi(productos);
    } catch (error) {}
  };
  /*Inicializa - monta -actualiza - desmonta */
  useEffect(() => {
    obtenerProductos();
  }, []);

  return (
    /*Fragments */
    <>
      <CarouselC />
      <main>
        <h2 className="text-center my-5">Nuestros Productos</h2>
        <div className="container">
          <div className="row">
            {productosApi.map((producto) => (
              <CardC
                key={producto.id}
                urlImage={producto.image}
                title={producto.title}
                price={producto.price}
                description={producto.description}
                idProduct={producto.id}
              /> /*key diferencia los componentes que se mapean  */
            ))}
            {/*<CardC urlImage={"./img/05.jpeg"} />
            <CardC urlImage={"./img/5-10.jpeg"} />
            <CardC urlImage={"./img/10mas.jpg"} />*/}
          </div>
        </div>
        <h2 className="text-center my-5">Nuestros Planes</h2>

        <div className="container">
          <div className="row">
            <CardPlanesC
              title={"Primeros Pasos "}
              price={"15000 x MES"}
              urlImage={"./img/05.jpeg"}
              description={"servicios para mascotas de 0 a 5 años"}
            />
            <CardPlanesC
              title={"Madurando "}
              price={"25000 x MES"}
              urlImage={"./img/5-10.jpeg"}
              description={"servicios para mascotas de 5 a 10 años"}
            />
            <CardPlanesC
              title={"Adultos "}
              price={"30000 x MES"}
              urlImage={"./img/10mas.jpg"}
              description={"servicios para mascotas de más de 10 años"}
            />
          </div>
        </div>
      </main>
      <ReseñasCarousel />
    </>
  );
};

export default PaginaPrincipal;
