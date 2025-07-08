import { useState } from "react";
import { useCart } from "../context/useCart";

function ItemCount({ item }) {
	const [count, setCount] = useState(1);

	const { agregarAlCarrito } = useCart();

	function handleSumar() {
		setCount(count + 1);
	}
	function handleRestar() {
		setCount(count - 1);
	}
	function handleAgregarAlCarrito() {
		agregarAlCarrito({ ...item, count });
	}

	return (
		<div>
			<p>{count}</p>
			<button onClick={handleRestar}>-</button>
			<button onClick={handleSumar}>+</button>
			<button onClick={handleAgregarAlCarrito}>Agregar al carrito</button>
		</div>
	);
}

export default ItemCount;
