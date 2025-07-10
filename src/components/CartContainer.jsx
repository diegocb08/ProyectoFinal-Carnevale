import { useNavigate } from "react-router-dom";

export default function CartContainer() {
	const navigate = useNavigate();
	const handleCheckout = () => {
		navigate("/checkout");
	};
	return (
		//crear un componente que muestre   el carrito
		<div>
			<h2>Cart</h2>
			<p>Your cart is empty.</p>

			<button onClick={handleCheckout}>Finalizar Compra</button>
		</div>
	);
}
