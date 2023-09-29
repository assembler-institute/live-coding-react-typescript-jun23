import React, { useEffect, useState } from "react";
import { Ring } from "react-awesome-spinners";
import { Datum, Meta } from "../../types/GiphyAPI";

type Props = {};

const GetGiphys = () => {
	const [searchTerms, setSearchTerms] = useState<Datum[]>([]);
	const [inputValue, setInputValue] = useState<string>("thor");
	const [loading, setLoading] = useState<boolean>(false);

	const url = `https://api.giphy.com/v1/gifs/search?api_key=qbJze5GSpd3UhrOIouNn80kXmkE3OEhN&q=${inputValue}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;

	useEffect(() => {
		const fetchGiphs = async (): Promise<void> => {
			try {
				setLoading(true);
				const response = await fetch(url);
				if (!response) throw new Error("El fetch no se pudo realizar");
				const { data, meta }: { data: Datum[]; meta: Meta } =
					await response.json();
				setSearchTerms(data as Datum[]);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchGiphs();
	}, [inputValue]);

	const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = target;
		setInputValue(value);
	};

	// const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {}

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				placeholder="Search"
				onChange={handleChange}
			/>
			<div>{loading && <Ring size={200} />}</div>
			{searchTerms &&
				searchTerms?.map(({ id, title, images }) => {
					return (
						<div key={id}>
							<p>{title}</p>
							<img src={images.original.url} />
						</div>
					);
				})}
		</div>
	);
};

export default GetGiphys;
