import { useState } from "react";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";

function ItemCount({ item }) {
	const [count, setCount] = useState(1);
	const { agregarAlCarrito } = useCart();
	const navigate = useNavigate();
	function handleVolverAlInicio() {
		navigate("/");
	}

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
			<button onClick={handleVolverAlInicio}> Volver al Inicio </button>
		</div>
	);
}

export default ItemCount;
