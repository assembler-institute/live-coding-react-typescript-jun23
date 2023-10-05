import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { WithReactHookForm, WithouthReactHookForm } from "./components";

function App() {
	return (
		<>
			<WithouthReactHookForm />
			<WithReactHookForm />
		</>
	);
}

export default App;
