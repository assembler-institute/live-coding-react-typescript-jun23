import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import CheckoutPage from "../pages/Checkout/CheckoutPage";

import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";

const WebRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/:product_name" element={<ProductDetailPage />} />
				<Route path="/checkout" element={<CheckoutPage />} />
				{/* Ruta anidada para el outlet */}
				{/* <Route path="/" element={<HomePage />}>
					<Route path="/:product_name" element={<ProductDetailPage />} />
				</Route> */}
			</Routes>
		</BrowserRouter>
	);
};

export default WebRoutes;
