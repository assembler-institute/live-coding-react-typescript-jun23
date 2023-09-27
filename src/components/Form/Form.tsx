import React, { useContext, useState } from "react";
import { BookContext } from "../../context/BookContext";

const Form = () => {
	const { handleNewBook } = useContext(BookContext);

	const [formState, setFormState] = useState({
		id: "",
		title: "",
		year: "",
	});

	const { id, title, year } = formState;

	const handleChange = ({ target }: any) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value, // Propiedad computada
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!id || !title || !year) "There is a filed missing";

		const newBook = {
			id,
			title,
			year,
		};

		// crear una nueva funcion mediante el reducer que nos gestione lo que queremos hacer

		handleNewBook(newBook);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="text"
					name="id"
					value={id}
					onChange={handleChange}
					placeholder="id"
				/>
				<input
					type="text"
					name="title"
					value={title}
					onChange={handleChange}
					placeholder="title"
				/>
				<input
					type="text"
					name="year"
					value={year}
					onChange={handleChange}
					placeholder="year"
				/>
				<button type="submit" className="btn btn-outline-primary mt-2">
					Submit
				</button>
			</form>
		</>
	);
};

export default Form;
