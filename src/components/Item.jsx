import { useNavigate } from "react-router-dom";

function Item({ item, styles }) {
	const navigate = useNavigate();

	return (
		<div className={styles.itemCard}>
			<img src={item.imagen} alt={item.nombre} />
			<p>{item.nombre}</p>
			<p>Precio: ${item.precio}</p>
			<button onClick={() => navigate(`/item/${item.id}`)}>
				Ver mas
			</button>
		</div>
	);
}

export default Item;
