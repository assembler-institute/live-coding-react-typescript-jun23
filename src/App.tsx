import "./App.css";
import {
	StudentProvider,
	TeacherProvider,
	CombinedCreateContext,
} from "./context/BookContext";
import BookList from "./components/BookList/BookList";

function App() {
	return (
		<CombinedCreateContext>
			<BookList />
		</CombinedCreateContext>
	);
}

export default App;
