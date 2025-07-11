import styles from "./Checkout.module.css";
import { useCart } from "../context/useCart";
import { createOrderDB } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
	const { cart, vaciarElCarrito, getTotal } = useCart();
	const navigate = useNavigate();

	const handleVolverAlCarrito = () => {
		navigate("/cart");
	};

	const handleSeguirComprando = () => {
		navigate("/");
	};

	function handleSubmit(event) {
		event.preventDefault();
		const formData = new FormData(event.target);
		const datosCliente = {
			name: formData.get("name"),
			email: formData.get("email"),
			phone: formData.get("phone"),
			address: formData.get("address"),
			city: formData.get("city"),
			zip: formData.get("zip"),
			country: formData.get("country"),
		};
		const productos = cart;
		const total = getTotal();

		// Toast de confirmación antes de procesar
		toast.warn(
			<div>
				<p>¿Estás seguro de que quieres finalizar la compra?</p>
				<p>
					<strong>Total a pagar: ${total.toLocaleString()}</strong>
				</p>
				<div style={{ marginTop: "10px" }}>
					<button
						onClick={() => {
							toast.dismiss();
							procesarCompra(datosCliente, productos);
						}}
						className="toast-confirm-button checkout"
					>
						Sí, confirmar compra
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
	}

	async function procesarCompra(datosCliente, productos) {
		try {
			await createOrderDB({
				datosCliente,
				productos,
				time: serverTimestamp(),
			});

			// Modal de éxito
			toast.success(
				<div>
					<p>¡Compra realizada con éxito!</p>
					<p>Gracias por tu compra 🎉</p>
					<div style={{ marginTop: "10px" }}>
						<button
							onClick={() => {
								toast.dismiss();
								vaciarElCarrito();
								navigate("/");
							}}
							className="toast-confirm-button checkout"
						>
							Continuar
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
		} catch (error) {
			console.error("Error al procesar la compra:", error);
			toast.error(
				"Error al procesar la compra. Por favor, intenta nuevamente.",
				{
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
				}
			);
		}
	}

	return (
		<div className={styles.checkoutContainer}>
			<h2 className={styles.title}>Checkout</h2>
			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.inputGroup}>
					<label className={styles.label} htmlFor="name">
						Nombre:
					</label>
					<input
						className={styles.input}
						type="text"
						id="name"
						name="name"
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.label} htmlFor="email">
						Email:
					</label>
					<input
						className={styles.input}
						type="email"
						id="email"
						name="email"
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.label} htmlFor="phone">
						Teléfono:
					</label>
					<input
						className={styles.input}
						type="tel"
						id="phone"
						name="phone"
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.label} htmlFor="address">
						Dirección:
					</label>
					<input
						className={styles.input}
						type="text"
						id="address"
						name="address"
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.label} htmlFor="city">
						Ciudad:
					</label>
					<input
						className={styles.input}
						type="text"
						id="city"
						name="city"
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.label} htmlFor="zip">
						Código Postal:
					</label>
					<input
						className={styles.input}
						type="text"
						id="zip"
						name="zip"
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.label} htmlFor="country">
						País:
					</label>
					<input
						className={styles.input}
						type="text"
						id="country"
						name="country"
						required
					/>
				</div>
				<div className={styles.buttonGroup}>
					<button
						type="button"
						className={styles.secondaryButton}
						onClick={handleSeguirComprando}
					>
						Seguir Comprando
					</button>
					<button
						type="button"
						className={styles.secondaryButton}
						onClick={handleVolverAlCarrito}
					>
						Volver al Carrito
					</button>
					<button className={styles.button} type="submit">
						Finalizar Compra
					</button>
				</div>
			</form>
		</div>
	);
}
