import { useContext } from "react";
import {
	StudentContext,
	TeacherContext,
	studentContext,
	teacherContext,
} from "../../context/BookContext";

type Props = {};

const BookList = (props: Props) => {
	// Para acceder necesitamos invocarlo
	const { amina, ferran } = studentContext();

	const {
		teacher: { teacher1, teacher2 },
	} = teacherContext();

	return (
		<>
			<p>{amina}</p>
			<p>{ferran}</p>
			<p>{teacher1} </p>
			<p>{teacher2}</p>
		</>
	);
};

export default BookList;
