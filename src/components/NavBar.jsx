import CartWidget from "./CartWidget";
import styles from "./NavBar.module.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function NavBar() {
	const navigate = useNavigate();
	const location = useLocation();
	const [selectedCategory, setSelectedCategory] = useState("placeholder");

	// Resetear el select cuando estamos en la ruta raíz
	useEffect(() => {
		if (location.pathname === "/") {
			setSelectedCategory("placeholder");
		}
	}, [location.pathname]);

	const handleCategoryChange = (event) => {
		const category = event.target.value;
		setSelectedCategory(category);

		if (category && category !== "placeholder") {
			if (category === "todas") {
				navigate("/");
			} else {
				navigate(`/category/${category}`);
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
				value={selectedCategory}
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
				<option value="monitores" className={styles.categoria}>
					Monitores
				</option>
				<option value="audio" className={styles.categoria}>
					Audio
				</option>
			</select>
			<CartWidget />
		</nav>
	);
}

export default NavBar;
