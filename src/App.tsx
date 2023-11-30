import AppRouter from "./router";
import { BrowserRouter } from "react-router-dom";
import Header from "./layouts/Header/Header";
import "./styles/main.scss";
import Footer from "./layouts/Footer/Footer";

function App() {
	return (
		<div id="App">
			<BrowserRouter>
				<Header />
				<main>
					<AppRouter />
				</main>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
