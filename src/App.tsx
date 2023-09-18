// ---
// Todos los imports
import { FC, Fragment } from "react";

// Con el archivo de barril logramos tener todos los imports en una misma línea

import { Products, Navbar } from "./components";

// Sin el archivo de barril en dos

// import Navbar from "./components/Navbar/Navbar";
// import Products from "./components/Products/Products";

import "./App.css";
// ---

// El tipado en typescript
// type AppProps = {}

const App: FC = () => {
	// Aquí iría todo el código de JS

	return (
		<Fragment>
			<Navbar />
			<Products title={"iPhone 15"} price={200} author={"apple"} />
			<Products title={"iPhone 12"} price={300} author={"apple"} />
			<Products title={"Samsung Galaxy"} price={150} author={"samsung"} />
		</Fragment>
	);
};

export default App;
