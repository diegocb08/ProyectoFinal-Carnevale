import ItemCount from "./ItemCount";
import { PuffLoader } from "react-spinners";

function ItemDetail({ itemDetails, styles }) {
	// Función para generar estrellas basadas en el rating
	const renderStars = (rating) => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		for (let i = 0; i < fullStars; i++) {
			stars.push("★");
		}

		if (hasHalfStar) {
			stars.push("☆");
		}

		return stars.join("");
	};

	return (
		<div>
			{itemDetails ? (
				<div className={styles.itemDetailCard}>
					<div className={styles.imageContainer}>
						<img
							src={itemDetails.imagen}
							alt={itemDetails.nombre}
							className={styles.productImage}
						/>
					</div>

					<div className={styles.productInfo}>
						<h2 className={styles.productTitle}>
							{itemDetails.nombre}
						</h2>
						<div className={styles.productPrice}>
							${itemDetails.precio.toLocaleString()}
						</div>

						<div className={styles.productDescription}>
							<strong>Descripción:</strong>{" "}
							{itemDetails.descripcion}
						</div>

						<div className={styles.productMeta}>
							<div className={styles.metaItem}>
								<span className={styles.metaLabel}>
									Categoría:
								</span>
								<span>{itemDetails.categoria}</span>
							</div>

							<div className={styles.metaItem}>
								<span className={styles.metaLabel}>
									Rating:
								</span>
								<div className={styles.rating}>
									<span className={styles.stars}>
										{renderStars(itemDetails.rating)}
									</span>
									<span className={styles.ratingText}>
										({itemDetails.rating}/5)
									</span>
								</div>
							</div>
						</div>

						<ItemCount item={itemDetails} styles={styles} />
					</div>
				</div>
			) : (
				<div className={styles.loadingContainer}>
					<PuffLoader color="hsl(228, 100%, 67%)" size={60} />
				</div>
			)}
		</div>
	);
}

export default ItemDetail;
