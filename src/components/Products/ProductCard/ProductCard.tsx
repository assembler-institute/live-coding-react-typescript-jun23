import { FC, useEffect } from "react";

import CounterApp from "../Counter/CounterApp";
import { ParentStateProps, ProductProps } from "../../../types/product";
import { ButtonAction } from "../../../types/buttons";

import products from "../../../assets/db/db";
import "./products.styles.css";

const ProductsContainer: FC<ButtonAction & ParentStateProps> = ({
	cartItems,
	setCartItems,
	counterClicked,
	setCounterClicked,
}) => {
	useEffect(() => {
		if (cartItems !== null) {
			localStorage.setItem("products", JSON.stringify(cartItems));
		}
	}, [cartItems]);

	const handleAddToCart = (id: string) => {
		const isItemInCart = cartItems?.some(
			(item: ProductProps) => item.id === id
		); // Prodríamos haber usado .find() en lugar de .some() o .filter() o .map() o .reduce() para buscar el elemento en el array
		if (isItemInCart) {
			const updateCartItems = cartItems?.map((item: any) =>
				item.id === id ? { ...item, quantity: item.quantity + 1 } : item
			);
			setCartItems(updateCartItems);
		}
		if (!isItemInCart) {
			const newItem = products.find((item) => item.id === id);
			return setCartItems([...cartItems, { ...newItem, quantity: 1 }]);
		}
	};

	return (
		<>
			<div className="products">
				{products.map(({ id, img, title, price, description, quantity }) => (
					<div className="m-2 p-2" key={id}>
						<div className="container">
							<div className="card">
								<img src={img} alt="" />
								<div className="card-body">
									<div className="row">
										<div className="card-title">
											<h4>{title}</h4>
											<h3>{price}€</h3>
										</div>
										<div className="view-btn">
											<a href="/">View Details</a>
										</div>
									</div>
									<hr />
									<p>{description}</p>
									<div className="btn-group">
										<button
											className="btn btn-primary"
											onClick={() => handleAddToCart(id)}
										>
											Add to Cart
										</button>

										<CounterApp
											id={id}
											counterClicked={counterClicked}
											setCounterClicked={setCounterClicked}
											quantity={quantity}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default ProductsContainer;
