import { FC, useEffect } from "react";

import CounterApp from "../Counter/CounterApp";
import { ProductProps } from "../../../types/product";
import { ButtonAction } from "../../../types/buttons";

import products from "../../../assets/db/db";
import "./products.styles.css";

const ProductsContainer: FC<ProductProps | ButtonAction> = (props: any) => {
	// const counter = "lo que el contador de cada producto diga";
	useEffect(() => {
		// lógica para guardar en localStorage
	}, []);

	return (
		<div className="products">
			{products.map(({ id, img, title, price, description }) => (
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
									<div className="btn">
										<a href="/">Buy Now</a>
									</div>
									<CounterApp {...props} />
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default ProductsContainer;
