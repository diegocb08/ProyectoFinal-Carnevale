import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";

export default function CartContainer() {
	const { cart } = useCart();
	const navigate = useNavigate();
	const handleCheckout = () => {
		navigate("/checkout");
	};

	if (cart.length === 0) {
		return (
			//crear un componente que muestre   el carrito
			<div>
				<h2>Cart</h2>
				<p>Your cart is empty.</p>
				<button onClick={handleCheckout}>Finalizar Compra</button>
			</div>
		);
	} else {
		return (
			<div>
				<h2>Cart</h2>
				<table>
					<thead>
						<tr>
							<th>Imagen</th>
							<th>Nombre</th>
							<th>Categoría</th>
							<th>Descripción</th>
							<th>Rating</th>
							<th>Precio</th>
						</tr>
					</thead>
					<tbody>
						{cart.map((item) => (
							<tr key={item.id}>
								<td>
									<img
										src={item.imagen}
										alt={item.nombre}
										style={{
											width: "50px",
											height: "50px",
										}}
									/>
								</td>
								<td>{item.nombre}</td>
								<td>{item.categoria}</td>
								<td>{item.descripcion}</td>
								<td>{item.rating}/5</td>
								<td>${item.precio}</td>
							</tr>
						))}
					</tbody>
				</table>
				<button onClick={handleCheckout}>Finalizar Compra</button>
			</div>
		);
	}
}
