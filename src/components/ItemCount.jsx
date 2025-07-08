import { useState } from "react";
import { useCart } from "../context/useCart";

function ItemCount({ item }) {
	const [count, setCount] = useState(1);

	const { agregarAlCarrito } = useCart();

	function handleSumar() {
		setCount(count + 1);
	}
	function handleRestar() {
		if (count > 1) {
			setCount(count - 1);
		}
	}
	function handleAgregarAlCarrito() {
		agregarAlCarrito({ ...item, count }, count);
	}

	return (
		<div>
			<button onClick={handleRestar} disabled={count <= 1}>
				-
			</button>
			<p>{count}</p>
			<button onClick={handleSumar}>+</button>
			<button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
		</div>
	);
}

export default ItemCount;
