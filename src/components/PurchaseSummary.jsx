import styles from "./PurchaseSummary.module.css";

export default function PurchaseSummary({
	datosCliente,
	productos,
	total,
	onVolver,
}) {
	return (
		<div className={styles.overlay}>
			<div className={styles.summaryContainer}>
				<div className={styles.header}>
					<h2 className={styles.title}>
						¡Compra realizada con éxito!
					</h2>
					<div className={styles.checkIcon}>✅</div>
				</div>

				<div className={styles.content}>
					<div className={styles.section}>
						<h3 className={styles.sectionTitle}>
							Datos del cliente
						</h3>
						<div className={styles.clientData}>
							<p>
								<strong>Nombre:</strong> {datosCliente.nombre}
							</p>
							<p>
								<strong>Email:</strong> {datosCliente.email}
							</p>
							<p>
								<strong>Teléfono:</strong>{" "}
								{datosCliente.telefono}
							</p>
							<p>
								<strong>Dirección:</strong>{" "}
								{datosCliente.direccion}
							</p>
							<p>
								<strong>Ciudad:</strong> {datosCliente.ciudad}
							</p>
						</div>
					</div>

					<div className={styles.section}>
						<h3 className={styles.sectionTitle}>
							Productos comprados
						</h3>
						<div className={styles.productList}>
							{productos.map((producto) => (
								<div
									key={producto.id}
									className={styles.productItem}
								>
									<img
										src={producto.imagen}
										alt={producto.nombre}
										className={styles.productImage}
									/>
									<div className={styles.productInfo}>
										<h4 className={styles.productName}>
											{producto.nombre}
										</h4>
										<p className={styles.productDetails}>
											Cantidad: {producto.count} × $
											{producto.precio.toLocaleString()}
										</p>
										<p className={styles.productSubtotal}>
											Subtotal: $
											{(
												producto.precio * producto.count
											).toLocaleString()}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className={styles.totalSection}>
						<h3 className={styles.totalTitle}>
							Total pagado: ${total.toLocaleString()}
						</h3>
					</div>

					<div className={styles.footer}>
						<p className={styles.thankYou}>
							¡Gracias por tu compra! 🎉
						</p>
						<button
							className={styles.backButton}
							onClick={onVolver}
						>
							Volver al inicio
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
