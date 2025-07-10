import "./Checkout.css";
import { useCart } from "../context/useCart";

export default function Checkout() {
	const { cart } = useCart();

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = {
			name: formData.get("name"),
			email: formData.get("email"),
			phone: formData.get("phone"),
			address: formData.get("address"),
			city: formData.get("city"),
			zip: formData.get("zip"),
			country: formData.get("country"),
		};
		console.log("Form submitted:", data);
	}

	return (
		<div className="checkout-container">
			<h2>Checkout</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">Nombre:</label>
					<input type="text" id="name" name="name" required />
				</div>
				<div>
					<label htmlFor="email">Email:</label>
					<input type="email" id="email" name="email" required />
				</div>
				<div>
					<label htmlFor="phone">Teléfono:</label>
					<input type="tel" id="phone" name="phone" required />
				</div>
				<div>
					<label htmlFor="address">Dirección:</label>
					<input type="text" id="address" name="address" required />
				</div>
				<div>
					<label htmlFor="city">Ciudad:</label>
					<input type="text" id="city" name="city" required />
				</div>
				<div>
					<label htmlFor="zip">Código Postal:</label>
					<input type="text" id="zip" name="zip" required />
				</div>
				<div>
					<label htmlFor="country">País:</label>
					<input type="text" id="country" name="country" required />
				</div>
				<button type="submit">Finalizar Compra</button>
			</form>
		</div>
	);
}
