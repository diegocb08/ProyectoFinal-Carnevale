import ItemCount from "./ItemCount";
import { PuffLoader } from "react-spinners";

function ItemDetail({ itemDetails }) {
  return (
    <div>
      {itemDetails ? (
        <div>
          <h2>{itemDetails.title}</h2>
          <img src={itemDetails.thumbnail} alt={itemDetails.title} />
          <p>
            <strong>Precio:</strong> ${itemDetails.price}
          </p>
          <p>
            <strong>Descripción:</strong> {itemDetails.description}
          </p>
          <p>
            <strong>Categoría:</strong> {itemDetails.category}
          </p>
          <p>
            <strong>Stock:</strong> {itemDetails.stock}
          </p>
          <p>
            <strong>Rating:</strong> {itemDetails.rating}/5
          </p>
          <ItemCount />
        </div>
      ) : (
        <div>
          <PuffLoader />
        </div>
      )}
    </div>
  );
}

export default ItemDetail;
