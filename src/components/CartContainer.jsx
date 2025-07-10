import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";

export default function CartContainer() {
	let { cart, vaciarElCarrito, getTotal, eliminarDelCarrito } = useCart();
	const navigate = useNavigate();
	const handleCheckout = () => {
		navigate("/checkout");
	};
	const handleSeguirComprado = () => {
		navigate("/");
	};
	const handleVaciarElCarrito = () => {
		vaciarElCarrito();
		alert("El carrito ha sido vaciado");
		navigate("/");
	};
	const handleEliminar = (item) => {
		const carritoAhora = eliminarDelCarrito(item.id);
		if (carritoAhora.length === 0) {
			alert("El carrito está vacío");
			navigate("/");
		}
	};

	return (
		<div>
			<h2>Cart</h2>
			<table>
				<thead>
					<tr>
						<th>Imagen</th>
						<th>Nombre</th>
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
							<td>${item.precio}</td>
							<td>{item.count}</td>
							<td>
								<button onClick={() => handleEliminar(item)}>
									Eliminar
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot>
					<tr>
						<td colSpan="3">Total</td>
						<td>${getTotal()}</td>
					</tr>
				</tfoot>
			</table>
			<button onClick={handleVaciarElCarrito}>Vaciar el Carrito</button>
			<button onClick={handleCheckout}>Ir al Checkout</button>
			<button onClick={handleSeguirComprado}> Seguir Comprando</button>
		</div>
	);
}
