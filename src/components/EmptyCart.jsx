import { useNavigate } from "react-router-dom";
import styles from "./EmptyCart.module.css";

export default function EmptyCart() {
	const navigate = useNavigate();

	const handleStartShopping = () => {
		navigate("/");
	};

	return (
		<div className={styles.emptyCart}>
			<div className={styles.emptyCartIcon}>🛒</div>
			<div className={styles.emptyCartMessage}>Tu carrito está vacío</div>
			<button
				className={styles.emptyCartButton}
				onClick={handleStartShopping}
			>
				Comenzar a comprar
			</button>
		</div>
	);
}
