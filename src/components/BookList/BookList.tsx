import { useContext, FC } from "react";
import { BookContext, bookContext } from "../../context/BookContext";
import Form from "../Form/Form";

type BookType = {
	id: string;
	title: string;
	year: string;
};

const BookList: FC = () => {
	const { bookState, handleRemoveBook } = bookContext();

	return (
		<>
			<h2 className="d-flex justify-content-lg-center">
				Harry Potter Books 🧙‍♀️🪄
			</h2>
			<div className="row">
				<div className="col-7">
					<h5>List of Books</h5>
					<ul className="list-group">
						{bookState &&
							bookState.map(({ id, title, year }: BookType) => (
								<li
									key={id}
									className="list-group-item d-flex justify-content-between"
								>
									<span className="align-center">{title}</span>
									<span className="align-center">{year}</span>

									<button
										className="btn btn-danger"
										onClick={() => handleRemoveBook(id)}
									>
										Delete book
									</button>
								</li>
							))}
					</ul>
				</div>
				<div className="col-3">
					<h5>Add my last book</h5>
					<Form />
				</div>
			</div>
		</>
	);
};

export default BookList;
