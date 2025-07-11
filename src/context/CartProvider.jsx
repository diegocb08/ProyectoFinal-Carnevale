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

	function incrementarCantidad(id) {
		const cartActualizado = cart.map((item) => {
			if (item.id === id) {
				return { ...item, count: item.count + 1 };
			}
			return item;
		});
		setCart(cartActualizado);
	}

	function decrementarCantidad(id) {
		const cartActualizado = cart.map((item) => {
			if (item.id === id) {
				const nuevaCantidad = item.count - 1;
				return { ...item, count: nuevaCantidad };
			}
			return item;
		});

		// Filtrar productos con cantidad 0
		const cartFiltrado = cartActualizado.filter((item) => item.count > 0);
		setCart(cartFiltrado);
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
				incrementarCantidad,
				decrementarCantidad,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}

export default CartProvider;
