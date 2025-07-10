import "./CartWidget.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function CartWidget() {
	const navigate = useNavigate();
	const handleCartClick = () => {
		navigate("/cart");
	};
	const { getCantidad } = useContext(CartContext);
	const cantidad = getCantidad();
	return (
		<div onClick={handleCartClick} className="cart-widget">
			<span className="cart-icon">
				🛒<span className="cart-number">{cantidad}</span>
			</span>
		</div>
	);
}

export default CartWidget;
