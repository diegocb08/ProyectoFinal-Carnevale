import { useState } from "react";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";

function ItemCount({ item, styles }) {
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
		<div className={styles.itemCountContainer}>
			<div className={styles.quantitySelector}>
				<button
					className={styles.quantityButton}
					onClick={handleRestar}
					disabled={count <= 1}
				>
					-
				</button>
				<div className={styles.quantityDisplay}>{count}</div>
				<button className={styles.quantityButton} onClick={handleSumar}>
					+
				</button>
			</div>

			<div className={styles.actionButtons}>
				<button
					className={styles.addToCartButton}
					onClick={handleAgregarAlCarrito}
				>
					Agregar al carrito
				</button>
				<button
					className={styles.backButton}
					onClick={handleVolverAlInicio}
				>
					Volver al Inicio
				</button>
			</div>
		</div>
	);
}

export default ItemCount;
