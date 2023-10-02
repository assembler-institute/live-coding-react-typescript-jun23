import { useEffect, useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

type ProductType = {
	product_id: number;
	product_name: string;
	price: number;
	quantity: number;
	category: string;
};

export const ProductListView = () => {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get("q") ?? "";

	const url = import.meta.env.VITE_API_BASE_URL;
	const productsURL = `${url}/products`;

	useEffect(() => {
		const fetchProductsFromApi = async () => {
			const response = await fetch(productsURL);
			const data = await response.json();
			setProducts(data);
		};

		fetchProductsFromApi();
	}, [url]);

	const handleInput = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = target;
		setSearchParams({ q: value });
	};

	return (
		<>
			<input
				type="search"
				value={query}
				name="filter"
				placeholder="Search your products"
				onChange={handleInput}
			/>
			{products
				.filter(({ product_name }) => {
					if (!query) return true;
					if (query) {
						const productNameToLowerCase = product_name.toLowerCase();
						return productNameToLowerCase.includes(query.toLowerCase());
					}
				})
				.map(({ product_id, product_name }) => {
					return (
						<article key={product_id}>
							<Link to={`/${product_name}`}>
								<p>{product_name}</p>
								<hr />
							</Link>
						</article>
					);
				})}
			{/* <Outlet /> */}
		</>
	);
};
