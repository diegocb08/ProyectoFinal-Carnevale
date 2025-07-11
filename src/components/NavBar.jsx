import CartWidget from "./CartWidget";
import styles from "./NavBar.module.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategoriesDB } from "../firebase/db";

function NavBar() {
	const navigate = useNavigate();
	const location = useLocation();
	const [selectedCategory, setSelectedCategory] = useState("placeholder");
	const [categories, setCategories] = useState([]);

	// Cargar categorías desde la base de datos
	useEffect(() => {
		const loadCategories = async () => {
			try {
				const categoriesFromDB = await getCategoriesDB();
				setCategories(categoriesFromDB);
			} catch (error) {
				console.error("Error al cargar categorías:", error);
			}
		};

		loadCategories();
	}, []);

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
				{categories.map((category) => (
					<option
						key={category}
						value={category}
						className={styles.categoria}
					>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</option>
				))}
			</select>
			<CartWidget />
		</nav>
	);
}

export default NavBar;
