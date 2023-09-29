import React, { useEffect, useState } from "react";

type Props = {};

const GetProducts = (props: Props) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const url = "http://localhost:3000/products";
			const response = await fetch(url);
			const data = await response.json();
			setProducts(data);
		};
		fetchProducts();
	}, []);

	return (
		<div>
			{products.map((product) => {
				return (
					<>
						<p>{product.name}</p>
						<p>{product.price}</p>
					</>
				);
			})}
		</div>
	);
};

export default GetProducts;
