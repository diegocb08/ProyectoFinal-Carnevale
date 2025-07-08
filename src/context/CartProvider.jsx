import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	function agregarAlCarrito(prod) {
		const isInCart = cart.some((item) => item.id === prod.id);
		if (isInCart) {
			const productoRepetido = cart.find((item) => item.id === prod.id);
			const cartSinProdRepetido = cart.filter(
				(item) => item.id !== prod.id
			);
			setCart([
				...cartSinProdRepetido,
				{ ...productoRepetido, count: productoRepetido.count + 1 },
			]);
		} else {
			setCart([...cart, prod]);
		}
	}

	function getCantidad() {
		const cantidades = cart.map((prod) => prod.count);
		const cantidad = cantidades.reduce((acc, curr) => acc + curr, 0);
		return cantidad;
	}

	return (
		<CartContext.Provider value={{ cart, agregarAlCarrito, getCantidad }}>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
