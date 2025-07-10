import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";

export default function CartContainer() {
	let { cart } = useCart();
	const navigate = useNavigate();
	const handleCheckout = () => {
		navigate("/checkout");
	};

	if (cart.length === 0) {
		return (
			<div>
				<h2>Carrito de Compras</h2>
				<h3>Su Carrito está vacío</h3>
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
							<th>Rating</th>
							<th>Precio</th>
							<th>Cantidad</th>
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
								<td>{item.rating}/5</td>
								<td>${item.precio}</td>
								<td>{item.count}</td>
								<td>
									<button>Eliminar</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
				<button onClick={handleCheckout}>Finalizar Compra</button>
			</div>
		);
	}
}
