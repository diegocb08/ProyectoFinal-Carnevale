import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";
import styles from "./CartContainer.module.css";
import { toast } from "react-toastify";

export default function CartContainer() {
	let { cart, vaciarElCarrito, getTotal, eliminarDelCarrito } = useCart();
	const navigate = useNavigate();
	const handleCheckout = () => {
		const total = getTotal();
		toast.warn(
			<div>
				<p>¿Estás seguro de que quieres proceder con la compra?</p>
				<p>
					<strong>Total a pagar: ${total.toLocaleString()}</strong>
				</p>
				<div style={{ marginTop: "10px" }}>
					<button
						onClick={() => {
							toast.dismiss();
							navigate("/checkout");
						}}
						className="toast-confirm-button checkout"
					>
						Sí, continuar
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

	// Si el carrito está vacío, mostrar mensaje
	if (cart.length === 0) {
		return (
			<div className={styles.cartContainer}>
				<div className={styles.emptyCart}>
					<div className={styles.emptyCartIcon}>🛒</div>
					<div className={styles.emptyCartMessage}>
						Tu carrito está vacío
					</div>
					<button
						className={styles.emptyCartButton}
						onClick={handleSeguirComprado}
					>
						Comenzar a comprar
					</button>
				</div>
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
								<span className={styles.productQuantity}>
									{item.count}
								</span>
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
					Finalizar Compra
				</button>
			</div>
		</div>
	);
}
