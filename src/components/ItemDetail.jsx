import ItemCount from "./ItemCount";
import { PuffLoader } from "react-spinners";

function ItemDetail({ itemDetails }) {
	return (
		<div>
			{itemDetails ? (
				<div>
					<h2>{itemDetails.title}</h2>
					<img src={itemDetails.imagen} alt={itemDetails.nombre} />
					<p>
						<strong>Precio:</strong> ${itemDetails.precio}
					</p>
					<p>
						<strong>Descripción:</strong> {itemDetails.descripcion}
					</p>
					<p>
						<strong>Categoría:</strong> {itemDetails.categoria}
					</p>
					<p>
						<strong>Rating:</strong> {itemDetails.rating}/5
					</p>
					<ItemCount item={itemDetails} />
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
