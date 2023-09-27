import { FC, useState, useContext, useEffect } from "react";
import GridLayout from "../Grid/GridLayout";
import ProductCard from "../ProductCard/ProductCard";
import { Cart } from "../Cart";
import { ParentStateProps } from "../../../types/product";
import { UserContext } from "../../../context/UserProvider";

import "./productsContainer.styles.css";
import { ButtonAction } from '../../../types/buttons';

const loadProducts = () => {
	const items = localStorage.getItem("products");
	if (items) {
		try {
			return JSON.parse(items);
		} catch (error) {
			console.error("Error parsing stored products:", error);
			// Handle the error as needed
		}
	}
	return [];
};

export const ProductsContainer: FC<ParentStateProps> = () => {
	const [counterClicked, setCounterClicked] = useState<boolean>(false);
	const [cartItems, setCartItems] = useState(loadProducts);

	useEffect(() => {
		if (counterClicked === true) {
			const items = localStorage.getItem("products");
			if (items) {
				const parsedItems = JSON.parse(items);
				setCartItems(parsedItems);
			}
			setCounterClicked(false);
		}
	}, [counterClicked, setCartItems]);

	const user = useContext(UserContext);
	return (
		<>
			<header className="welcome_message">
				<h2 className="welcome_message--header">Welcome back, {user?.name}</h2>
				<p className="welcome_message--paragraph">
					Thanks for visiting our website. Enjoy your stay!
				</p>
			</header>
			<GridLayout>
				{/* <Link to="/blog">Blog</Link> */}
				<ProductCard
					cartItems={cartItems}
					setCartItems={setCartItems}
					counterClicked={counterClicked}
					setCounterClicked={setCounterClicked}
				/>
				<Cart
					cartItems={cartItems}
					setCartItems={setCartItems}
					counterClicked={counterClicked}
					setCounterClicked={setCounterClicked}
				/>
			</GridLayout>
		</>
	);
};
