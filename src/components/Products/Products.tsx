import { FC, Fragment, useState } from "react";

type ArticleProps = {
	title: string;
	price: number;
	author: string;
	shop?: string;
	counter?: number;
};

export const Products: FC<ArticleProps> = ({ title, price, author, shop }) => {
	const [counter, setCounter] = useState<number>(0);

	const handleIncrease = () => {
		setCounter((prevState) => prevState + 1); // 1 y sale y actualiza
		setCounter((prevState) => prevState + 1); // 2 y sale y actualiza
	};

	shop = "Enric Shop";

	return (
		<Fragment>
			<h3>{title}</h3>
			<p>{price}</p>
			<p>{author}</p>
			<p>{shop}</p>
			<button onClick={handleIncrease}>+</button>
			<p>{counter}</p>
		</Fragment>
	);
};

// export default Products;
