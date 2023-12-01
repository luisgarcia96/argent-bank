import Hero from "../../components/Hero/Hero";
import styles from "./LandingPage.module.scss";

const LandingPage = () => {
	return (
		<div className={styles.container}>
			<Hero />
			<h1 className={styles.title}>Welcome to the Landing Page</h1>
			<p className={styles.description}>
				This is the description of the landing page.
			</p>
			{/* Add your content here */}
		</div>
	);
};

export default LandingPage;
