import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import NotFound from "../pages/NotFound/NotFound";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRouter;
