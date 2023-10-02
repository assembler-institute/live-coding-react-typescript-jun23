import { FC } from "react";
import products from "../../../assets/db/db.json";
import { useParams } from "react-router-dom";

export const ProductDetailView: FC = () => {
	const { product_name: productName } = useParams<{ product_name: string }>();
	const productsArray = products.products;

	const productDetails = productName
		? productsArray.find(({ product_name }) => product_name === productName)
		: undefined;

	if (!productDetails) return null;

	const { product_id, product_name, price, quantity, category } =
		productDetails;

	return (
		<section>
			<p>{product_id}</p>
			<p>{product_name}</p>
			<p>{price}</p>
			<p>{quantity}</p>
			<p>{category}</p>
		</section>
	);
};
