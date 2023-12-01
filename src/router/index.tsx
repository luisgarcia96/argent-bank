import { Routes, Route } from "react-router-dom";
import Landing from "../pages/Landing/LandingPage";
import NotFound from "../pages/NotFound/NotFound";

const AppRouter = () => {
	return (
		<Routes>
			<Route path="/" element={<Landing />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRouter;
