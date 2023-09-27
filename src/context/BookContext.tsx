import { FC, PropsWithChildren, createContext, useReducer } from "react";
import { bookReducer, initialArgs } from "./action";

export const BookContext = createContext(undefined);

export const BookProvider: FC<PropsWithChildren> = ({ children }) => {
	// hook useReducer => estado por defecto (param1), información (param2)
	const [bookState, dispatch] = useReducer(bookReducer, initialArgs);


	// Funciones que afectan al reducer
	const handleNewBook = (newBook) => {
		dispatch({
			type: "ADD_BOOK",
			payload: newBook,
		});
	};

	const handleRemoveBook = (id) => {
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
