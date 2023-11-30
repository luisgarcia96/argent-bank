import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			{/* <Route path="/about" element={<About />} /> */}
			{/* <Route path="*" element={<NotFound />} /> */}
		</Routes>
	);
};

export default AppRouter;
