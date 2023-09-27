import { FC, useEffect } from "react";
import { ProductProps } from "../../../types/product";

import "./cart.styles.css";

export const Cart: FC<ProductProps> = ({
	cartItems,
	setCartItems,
	counterClicked,
	setCounterClicked,
}) => {
	console.log(cartItems);

	useEffect(() => {
		if (counterClicked === true) {
			const items = localStorage.getItem("products");
			if (items) {
				const parsedItems = JSON.parse(items);
				setCartItems(parsedItems);
			}
		}
	}, [counterClicked, setCartItems]);

	console.log(cartItems);

	return (
		<>
			<div className="side-cart">
				<div className="cart-header">
					<h2>My Cart</h2>
				</div>
				<div className="cart-items">
					{cartItems?.map((item) => (
						<div className="cart-item" key={item.id}>
							<img src={item.img} alt={item.title} />
							<div className="cart-item-details">
								<h4>{item.title}</h4>
								<p>Price: {item.price}€</p>
								<p>Quantity: {item.quantity || 0}</p>
							</div>
						</div>
					))}
				</div>
				<div className="cart-footer">
					<p>Total items: {cartItems?.length}</p>
					<p>
						Total price:
						{
							/* Calculate total price */
							cartItems?.reduce((acc, item) => acc + item.price, 0)
						}
						€
					</p>
				</div>
				<button className="checkout-button">Checkout</button>
			</div>
		</>
	);
};
