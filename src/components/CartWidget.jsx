import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function CartWidget() {
	const { getCantidad } = useContext(CartContext);
	const cantidad = getCantidad();
	return (
		<div className="cart-widget">
			<span className="cart-icon">
				🛒<span className="cart-number">{cantidad}</span>
			</span>
		</div>
	);
}

export default CartWidget;
