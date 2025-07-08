import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { withLoading } from "../hoc/withLoading";
import { useParams } from "react-router-dom";

const ItemListWithLoading = withLoading(ItemList);

function ItemListContainer() {
	const [items, setItems] = useState([]);
	const { categoryName } = useParams();

	async function getCategoryProducts(categoryName) {
		try {
			const resp = await fetch(
				`https://dummyjson.com/products/category/${categoryName}`
			);
			const fetchedData = await resp.json();

			if (!resp.ok) {
				throw new Error(
					`Error en la solicitud de datos de productos: ${resp.status}`
				);
			}
			setItems(fetchedData.products);
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
			const resp = await fetch("https://dummyjson.com/products");
			const fetchedData = await resp.json();
			console.log(fetchedData);

			if (!resp.ok) {
				throw new Error(
					`Error en la solicitud de datos de productos: ${resp.status}`
				);
			}

			setItems(fetchedData.products);
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
