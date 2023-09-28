import {
	FC,
	PropsWithChildren,
	createContext,
	useEffect,
	useReducer,
	useContext,
} from "react";
import { bookReducer, initialArgs } from "./action";

type BookType = {
	id: string;
	title: string;
	year: string;
};

type BookStateProps = {
	bookState: BookType[];
	handleRemoveBook: (id: string) => void;
	handleNewBook: (book: BookType) => void;
};

export const BookContext = createContext<BookStateProps | undefined>({
	bookState: [],
	handleNewBook: () => {},
	handleRemoveBook: () => {}
});

const init = () => {
	const storedData = localStorage.getItem("books");
	if (storedData !== null) {
		return JSON.parse(storedData);
	}
	return initialArgs;
};

const BookProvider: FC<PropsWithChildren> = ({ children }) => {
	// hook useReducer => estado por defecto (param1), información (param2)
	const [bookState, dispatch] = useReducer(bookReducer, initialArgs, init);

	useEffect(() => {
		localStorage.setItem("books", JSON.stringify(bookState));
	}, [bookState]);

	// Funciones que afectan al reducer
	const handleNewBook = (newBook: BookType) => {
		dispatch({
			type: "ADD_BOOK",
			payload: newBook,
		});
	};

	const handleRemoveBook = (id: string) => {
		dispatch({
			type: "REMOVE_BOOK",
			payload: id,
		});
	};

	return (
		<BookContext.Provider
			value={{ bookState, handleNewBook, handleRemoveBook }}
		>
			{children}
		</BookContext.Provider>
	);
};

function bookContext() {
	const context = useContext(BookContext);
	if (context === undefined || context === null) {
		throw new Error("Function not implemented.");
	}
	return context;
}

export { BookProvider, bookContext };
