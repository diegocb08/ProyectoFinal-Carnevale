import { CartContext } from "./CartContext";
import { useState } from "react";

function CartProvider({ children }) {
	const [cart, setCart] = useState([]);

	function agregarAlCarrito(prod, count) {
		const isInCart = cart.some((item) => item.id === prod.id);
		if (isInCart) {
			const productoRepetido = cart.find((item) => item.id === prod.id);
			const cartSinProdRepetido = cart.filter(
				(item) => item.id !== prod.id
			);
			setCart([
				...cartSinProdRepetido,
				{ ...productoRepetido, count: productoRepetido.count + count },
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

	function vaciarElCarrito() {
		setCart([]);
	}
	function getTotal() {
		const total = cart.reduce(
			(acc, item) => acc + item.precio * item.count,
			0
		);
		return total;
	}

	function eliminarDelCarrito(id) {
		const cartSinProdRepetido = cart.filter((item) => item.id !== id);
		setCart(cartSinProdRepetido);
		return cartSinProdRepetido;
	}

	return (
		<CartContext.Provider
			value={{
				cart,
				agregarAlCarrito,
				getCantidad,
				vaciarElCarrito,
				getTotal,
				eliminarDelCarrito,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
