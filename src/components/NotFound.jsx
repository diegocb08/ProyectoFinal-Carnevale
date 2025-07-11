import styles from "./NotFound.module.css";

function NotFound() {
	return (
		<div className={styles.notFoundContainer}>
			<h1>404</h1>
			<p>¡Oops! Parece que la página que buscas no existe.</p>
			<p>
				Puedes regresar a la <a href="/">página principal</a>.
			</p>
		</div>
	);
}

export default NotFound;
