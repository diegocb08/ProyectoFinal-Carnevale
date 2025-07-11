import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import NotFound from "./components/NotFound";
import Checkout from "./components/Checkout";
import CartContainer from "./components/CartContainer";
import styles from "./App.module.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toastify-custom.css";

function App() {
	return (
		<div className={styles.appContainer}>
			<BrowserRouter>
				<NavBar />
				<div className={styles.appContent}>
					<div className={styles.routeContainer}>
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
					</div>
				</div>
			</BrowserRouter>
			<ToastContainer
				position="top-right"
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
		</div>
	);
}

export default App;
