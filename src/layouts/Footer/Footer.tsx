import React from "react";

import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
	return (
		<footer className={styles.footer}>
			<p>Copyright 2020 Argent Bank</p>
		</footer>
	);
};

export default Footer;
