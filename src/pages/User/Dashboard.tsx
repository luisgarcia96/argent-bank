import React from "react";
import Button from "../../components/Button/Button";

import styles from "./Dashboard.module.scss";

const Dashboard: React.FC = () => {
	return (
		<div className={styles.dashboard}>
			<div className={styles.dashboard__header}>
				<h1>Welcome back Tony Jarvis!</h1>
				<Button text={"Edit Name"} onClick={() => {}} />
			</div>
			<div className={styles.dashboard__content}></div>
		</div>
	);
};

export default Dashboard;
