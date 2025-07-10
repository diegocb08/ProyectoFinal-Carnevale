import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";
import Checkout from "./components/Checkout";
import CartContainer from "./components/CartContainer";

function App() {
	return (
		<>
			<BrowserRouter>
				<NavBar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route
						path="/category/:categoryName"
						element={<ItemListContainer />}
					/>
					<Route
						path="/item/:itemId"
						element={<ItemDetailContainer />}
					/>
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/cart" element={<CartContainer />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
