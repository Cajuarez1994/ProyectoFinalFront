/*Original */
//export const useApiFakeStore = async (idProducto) => {
// try {
//   /*resolve - resuelto */
//  const productos = await fetch(
//    idProducto
//    ? `https://fakestoreapi.com/products/${idProducto}`
//     : "https://fakestoreapi.com/products"
// );
//  const data = await productos.json();
//  console.log(data);
//  return data;
// } catch (error) {
/*reject  - rechazar */
//   return error;
// }
//};

export const useApiFakeStore = async (idProducto) => {
  try {
    // URL del archivo JSON local
    const url = idProducto
      ? `/productos.json` // No es necesario un ID específico, pero puedes agregar lógica si lo prefieres.
      : "/productos.json";

    const response = await fetch(url);
    const data = await response.json();

    // Si existe idProducto, filtra el producto por ID
    if (idProducto) {
      const producto = data.find(
        (producto) => producto.id === parseInt(idProducto)
      );
      return producto ? producto : { error: "Producto no encontrado" };
    }

    return data;
  } catch (error) {
    console.log("Error al obtener productos", error);
    return error;
  }
};
