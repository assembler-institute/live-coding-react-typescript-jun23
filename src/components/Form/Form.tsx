import { FC, useContext, useState, ChangeEvent } from "react";
import { BookContext, bookContext } from "../../context/BookContext";
import { FormEvent } from "react";

type BookType = {
	id: string;
	title: string;
	year: string;
};

type NewBookProps = {
	handleNewBook: (book: BookType) => void;
};

const Form: FC = () => {
	const { handleNewBook } = useContext(BookContext) as NewBookProps;

	const [formState, setFormState] = useState({
		id: "",
		title: "",
		year: "",
	});

	const { id, title, year } = formState;

	const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
		const { name, value } = target;
		setFormState({
			...formState,
			[name]: value, // Propiedad computada
		});
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!id || !title || !year) {
			console.log("There is a filed missing");
			return;
		}

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
