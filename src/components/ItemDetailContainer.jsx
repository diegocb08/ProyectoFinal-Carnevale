import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getProductByIdDB } from "../firebase/db";
import styles from "./ItemDetailContainer.module.css";

function ItemDetailContainer() {
	const [itemDetails, setItemDetails] = useState(null);
	const { itemId } = useParams();

	async function getProductDetails(itemId) {
		try {
			const product = await getProductByIdDB(itemId);
			setItemDetails(product);
		} catch (error) {
			console.error(
				"Ha ocurrido un error al obtener los detalles del producto: ",
				error
			);
			setItemDetails(null);
		}
	}
	useEffect(() => {
		if (itemId) {
			getProductDetails(itemId);
		}
	}, [itemId]);
	return (
		<div className={styles.itemDetailContainer}>
			<ItemDetail itemDetails={itemDetails} styles={styles} />
		</div>
	);
}

export default ItemDetailContainer;
