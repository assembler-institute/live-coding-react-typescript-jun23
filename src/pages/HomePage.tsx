import { FC } from "react";
import { ProductsContainer } from "../components";
import { ProductProps } from "../types/product";

export const HomePage: FC<ProductProps> = (props) => {
	return (
		<>
			<ProductsContainer {...props} />
		</>
	);
};
