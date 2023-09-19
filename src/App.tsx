import "./App.css";
import { LatestPhotosContainer, Navbar, SearchBar } from "./components";

function App() {
	return (
		<>
			<Navbar />
			<SearchBar />
			<LatestPhotosContainer />
		</>
	);
}

export default App;
