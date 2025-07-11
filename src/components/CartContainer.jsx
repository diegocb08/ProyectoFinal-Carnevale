import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import styles from "./CartContainer.module.css";
import { toast } from "react-toastify";
import EmptyCart from "./EmptyCart";

export default function CartContainer() {
	let {
		cart,
		vaciarElCarrito,
		getTotal,
		eliminarDelCarrito,
		incrementarCantidad,
		decrementarCantidad,
	} = useCart();
	const navigate = useNavigate();
	const handleCheckout = () => {
		navigate("/checkout");
	};
	const handleSeguirComprado = () => {
		navigate("/");
	};
	const handleVaciarElCarrito = () => {
		toast.warn(
			<div>
				<p>¿Estás seguro de que quieres vaciar el carrito?</p>
				<div style={{ marginTop: "10px" }}>
					<button
						onClick={() => {
							toast.dismiss();
							vaciarElCarrito();
							toast.success("El carrito ha sido vaciado", {
								position: "top-right",
								autoClose: 3000,
							});
						}}
						className="toast-confirm-button confirm"
					>
						Sí, vaciar
					</button>
					<button
						onClick={() => toast.dismiss()}
						className="toast-confirm-button cancel"
					>
						Cancelar
					</button>
				</div>
			</div>,
			{
				position: "top-center",
				autoClose: false,
				hideProgressBar: true,
				closeOnClick: false,
				pauseOnHover: true,
				draggable: false,
				closeButton: false,
			}
		);
	};
	const handleEliminar = (item) => {
		eliminarDelCarrito(item.id);
	};

	const handleDecrementar = (item) => {
		if (item.count === 1) {
			toast.warn(
				<div>
					<p>
						¿Estás seguro de que quieres eliminar este producto del
						carrito?
					</p>
					<p>
						<strong>{item.nombre}</strong>
					</p>
					<div style={{ marginTop: "10px" }}>
						<button
							onClick={() => {
								toast.dismiss();
								decrementarCantidad(item.id);
								toast.success(
									"Producto eliminado del carrito",
									{
										position: "top-right",
										autoClose: 2000,
									}
								);
							}}
							className="toast-confirm-button confirm"
						>
							Sí, eliminar
						</button>
						<button
							onClick={() => toast.dismiss()}
							className="toast-confirm-button cancel"
						>
							Cancelar
						</button>
					</div>
				</div>,
				{
					position: "top-center",
					autoClose: false,
					hideProgressBar: true,
					closeOnClick: false,
					pauseOnHover: true,
					draggable: false,
					closeButton: false,
				}
			);
		} else {
			decrementarCantidad(item.id);
		}
	};

	// Si el carrito está vacío, mostrar mensaje
	if (cart.length === 0) {
		return (
			<div className={styles.cartContainer}>
				<EmptyCart />
			</div>
		);
	}

	return (
		<div className={styles.cartContainer}>
			<h2 className={styles.cartTitle}>Mi Carrito</h2>
			<table className={styles.cartTable}>
				<thead className={styles.tableHeader}>
					<tr>
						<th>Imagen</th>
						<th>Nombre</th>
						<th>Precio</th>
						<th>Cantidad</th>
						<th>Acciones</th>
					</tr>
				</thead>
				<tbody className={styles.tableBody}>
					{cart.map((item) => (
						<tr key={item.id}>
							<td className={styles.tableCell}>
								<img
									src={item.imagen}
									alt={item.nombre}
									className={styles.productImage}
								/>
							</td>
							<td
								className={`${styles.tableCell} ${styles.productName}`}
							>
								{item.nombre}
							</td>
							<td
								className={`${styles.tableCell} ${styles.productPrice}`}
							>
								${item.precio.toLocaleString()}
							</td>
							<td className={styles.tableCell}>
								<div className={styles.quantityControls}>
									<button
										className={styles.quantityButton}
										onClick={() => handleDecrementar(item)}
									>
										-
									</button>
									<span className={styles.productQuantity}>
										{item.count}
									</span>
									<button
										className={styles.quantityButton}
										onClick={() =>
											incrementarCantidad(item.id)
										}
									>
										+
									</button>
								</div>
							</td>
							<td className={styles.tableCell}>
								<button
									className={styles.removeButton}
									onClick={() => handleEliminar(item)}
								>
									Eliminar
								</button>
							</td>
						</tr>
					))}
				</tbody>
				<tfoot className={styles.tableFooter}>
					<tr>
						<td
							colSpan="4"
							className={`${styles.tableCell} ${styles.totalLabel}`}
						>
							Total
						</td>
						<td
							className={`${styles.tableCell} ${styles.totalAmount}`}
						>
							${getTotal().toLocaleString()}
						</td>
					</tr>
				</tfoot>
			</table>

			<div className={styles.actionButtons}>
				<button
					className={styles.clearCartButton}
					onClick={handleVaciarElCarrito}
				>
					Vaciar Carrito
				</button>
				<button
					className={styles.continueShoppingButton}
					onClick={handleSeguirComprado}
				>
					Seguir Comprando
				</button>
				<button
					className={styles.checkoutButton}
					onClick={handleCheckout}
				>
					Ir al Checkout
				</button>
			</div>
		</div>
	);
}
