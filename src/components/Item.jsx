import { useNavigate } from "react-router-dom";

function Item({ item }) {
	const navigate = useNavigate();

	return (
		<div className="itemCard">
			<img src={item.imagen} alt={"item.title"} />
			<p>{item.nombre}</p>
			<p>Precio: ${item.precio}</p>
			<button onClick={() => navigate(`/item/${item.id}`)}>
				Ver mas
			</button>
		</div>
	);
}

export default Item;
