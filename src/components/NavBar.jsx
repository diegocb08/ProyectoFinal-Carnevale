import CartWidget from "./CartWidget";
import styles from "./NavBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

function NavBar() {
	const navigate = useNavigate();

	const handleCategoryChange = (event) => {
		const selectedCategory = event.target.value;
		if (selectedCategory && selectedCategory !== "placeholder") {
			if (selectedCategory === "todas") {
				navigate("/");
			} else {
				navigate(`/category/${selectedCategory}`);
			}
		}
	};

	return (
		<nav className={styles.navContainer}>
			<h1>
				<NavLink to="/">E-Commerce</NavLink>
			</h1>
			<select
				className={styles.categorias}
				onChange={handleCategoryChange}
				defaultValue="placeholder"
			>
				<option value="placeholder" disabled>
					Selecciona una categoría
				</option>
				<option value="todas" className={styles.categoria}>
					Todos los productos
				</option>
				<option value="celulares" className={styles.categoria}>
					Celulares
				</option>
				<option value="notebooks" className={styles.categoria}>
					Notebooks
				</option>
			</select>
			<CartWidget />
		</nav>
	);
}

export default NavBar;
