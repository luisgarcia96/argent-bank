import AppRouter from "./router";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header/Header";
import "./styles/main.scss";

function App() {
	return (
		<div id="App">
			<BrowserRouter>
				<Header />
				<main>
					<AppRouter />
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
