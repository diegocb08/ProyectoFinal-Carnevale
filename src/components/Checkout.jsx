import styles from "./Checkout.module.css";
import { useCart } from "../context/useCart";
import { createOrderDB } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PurchaseSummary from "./PurchaseSummary";

export default function Checkout() {
	const { cart, vaciarElCarrito, getTotal } = useCart();
	const navigate = useNavigate();
	const [isProcessing, setIsProcessing] = useState(false);
	const [showSummary, setShowSummary] = useState(false);
	const [purchaseData, setPurchaseData] = useState(null);

	const handleVolverAlCarrito = () => {
		navigate("/cart");
	};

	const handleSeguirComprando = () => {
		navigate("/");
	};

	const handleVolverAlInicio = () => {
		vaciarElCarrito();
		setShowSummary(false);
		setIsProcessing(false);
		setPurchaseData(null);
		navigate("/");
	};

	function handleSubmit(event) {
		event.preventDefault();

		// Prevenir múltiples "finalizaciones de compra"
		if (isProcessing) return;

		const formData = new FormData(event.target);
		const datosCliente = {
			nombre: formData.get("nombre"),
			email: formData.get("email"),
			telefono: formData.get("telefono"),
			direccion: formData.get("direccion"),
			ciudad: formData.get("ciudad"),
			codigoPostal: formData.get("codigoPostal"),
			pais: formData.get("pais"),
		};
		const productos = cart;
		const total = getTotal();

		// Marcar como procesando
		setIsProcessing(true);

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
						onClick={() => {
							toast.dismiss();
							setIsProcessing(false); // Resetear el estado
						}}
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
			const orderId = await createOrderDB({
				datosCliente,
				productos,
				time: serverTimestamp(),
			});

			// Guardar datos para el resumen y mostrar componente
			setPurchaseData({
				datosCliente,
				productos,
				total: getTotal(),
				orderId: orderId,
			});
			setShowSummary(true);
		} catch (error) {
			console.error("Error al procesar la compra:", error);
			setIsProcessing(false);
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
					<label className={styles.label} htmlFor="nombre">
						Nombre:
					</label>
					<input
						className={styles.input}
						type="text"
						id="nombre"
						name="nombre"
						placeholder="Ingresa tu nombre completo"
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
						placeholder="ejemplo@correo.com"
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.label} htmlFor="telefono">
						Teléfono:
					</label>
					<input
						className={styles.input}
						type="tel"
						id="telefono"
						name="telefono"
						placeholder="11-1234-5678"
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.label} htmlFor="direccion">
						Dirección:
					</label>
					<input
						className={styles.input}
						type="text"
						id="direccion"
						name="direccion"
						placeholder="Calle y número"
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.label} htmlFor="ciudad">
						Ciudad:
					</label>
					<input
						className={styles.input}
						type="text"
						id="ciudad"
						name="ciudad"
						placeholder="Nombre de la ciudad"
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.label} htmlFor="codigoPostal">
						Código Postal:
					</label>
					<input
						className={styles.input}
						type="text"
						id="codigoPostal"
						name="codigoPostal"
						placeholder="1234"
						required
					/>
				</div>
				<div className={styles.inputGroup}>
					<label className={styles.label} htmlFor="pais">
						País:
					</label>
					<input
						className={styles.input}
						type="text"
						id="pais"
						name="pais"
						placeholder="Argentina"
						required
					/>
				</div>
				<div className={styles.buttonGroup}>
					<button
						type="button"
						className={styles.secondaryButton}
						onClick={handleSeguirComprando}
						disabled={isProcessing}
					>
						Seguir Comprando
					</button>
					<button
						type="button"
						className={styles.secondaryButton}
						onClick={handleVolverAlCarrito}
						disabled={isProcessing}
					>
						Volver al Carrito
					</button>
					<button
						className={styles.button}
						type="submit"
						disabled={isProcessing}
					>
						{isProcessing ? "Procesando..." : "Finalizar Compra"}
					</button>
				</div>
			</form>

			{showSummary && purchaseData && (
				<PurchaseSummary
					datosCliente={purchaseData.datosCliente}
					productos={purchaseData.productos}
					total={purchaseData.total}
					orderId={purchaseData.orderId}
					onVolver={handleVolverAlInicio}
				/>
			)}
		</div>
	);
}
