export default function Checkout() {
	return (
		<div>
			<h2>Checkout</h2>
			<form>
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
