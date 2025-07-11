import styles from "./CartWidget.module.css";
import { useCart } from "../context/useCart";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function CartWidget() {
	const navigate = useNavigate();
	const { cart } = useCart();
	const handleCartClick = () => {
		if (cart.length === 0) {
			toast.warn("El carrito está vacío", {
				position: "top-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
			});
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
