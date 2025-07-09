import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { withLoading } from "../hoc/withLoading";
import { useParams } from "react-router-dom";
import { getProductsDB, getProductsByCategorieDB } from "../firebase/db";

const ItemListWithLoading = withLoading(ItemList);
function ItemListContainer() {
	const [items, setItems] = useState([]);
	const { categoryName } = useParams();

	async function getCategoryProducts(categoryName) {
		try {
			const products = await getProductsByCategorieDB(categoryName);
			setItems(products);
		} catch (error) {
			console.error(
				"Ha ocurrido un error al obtener productos por categoría: ",
				error
			);
			setItems([]);
		}
	}

	async function getProducts() {
		try {
			const products = await getProductsDB();
			setItems(products);
		} catch (error) {
			console.error(
				"Ha ocurrido un error al obtener todos los productos: ",
				error
			);
			setItems([]);
		}
	}

	useEffect(() => {
		setItems([]);
		if (categoryName) {
			getCategoryProducts(categoryName);
		} else {
			getProducts();
		}
	}, [categoryName]);

	return <ItemListWithLoading items={items} />;
}

export default ItemListContainer;
