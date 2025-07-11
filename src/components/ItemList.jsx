import Item from "./Item";

function ItemList({ items, styles }) {
	return (
		<div className={styles.itemListContainer}>
			{items.map((item) => (
				<Item key={item.id} item={item} styles={styles} />
			))}
		</div>
	);
}

export default ItemList;
