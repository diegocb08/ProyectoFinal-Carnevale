import styles from "./Checkout.module.css";
import { useCart } from "../context/useCart";
import { createOrderDB } from "../firebase/db";
import { serverTimestamp } from "firebase/firestore";

export default function Checkout() {
	const { cart } = useCart();

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

		createOrderDB({ datosCliente, productos, time: serverTimestamp() });
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
				<button className={styles.button} type="submit">
					Finalizar Compra
				</button>
			</form>
		</div>
	);
}
