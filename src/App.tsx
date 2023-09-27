import "./App.css";
import { RouterPaths } from "./Routes/RouterPaths.routes";
import { UserProvider } from "./context/UserProvider";

function App(props: any) {
	return (
		<>
			<UserProvider {...props}>
				<RouterPaths {...props} />
			</UserProvider>
		</>
	);
}

export default App;
