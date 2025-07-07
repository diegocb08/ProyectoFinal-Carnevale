import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [itemDetails, setItemDetails] = useState(null);
  const { itemId } = useParams();

  async function getProductDetails(itemId) {
    try {
      const resp = await fetch(`https://dummyjson.com/products/${itemId}`);
      const fetchedData = await resp.json();

      if (!resp.ok) {
        throw new Error(
          `Error en la solicitud de datos del producto: ${resp.status}`
        );
      }
      setItemDetails(fetchedData);
    } catch (error) {
      console.error(
        "Ha ocurrido un error al obtener los detalles del producto: ",
        error
      );
      setItemDetails(null);
    }
  }
  useEffect(() => {
    if (itemId) {
      getProductDetails(itemId);
    }
  }, [itemId]);
  return <ItemDetail itemDetails={itemDetails} />;
}

export default ItemDetailContainer;
