import styles from "./CartWidget.module.css";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";

function CartWidget() {
	const navigate = useNavigate();
	const { cart } = useCart();
	const handleCartClick = () => {
		if (cart.length === 0) {
			alert("El carrito está vacío");
			return;
		} else {
			navigate("/cart");
		}
	};
	const { getCantidad } = useCart();
	const cantidad = getCantidad();
	return (
		<div onClick={handleCartClick} className={styles.cartWidget}>
			<span className={styles.cartIcon}>
				🛒<span className={styles.cartNumber}>{cantidad}</span>
			</span>
		</div>
	);
}

export default CartWidget;
