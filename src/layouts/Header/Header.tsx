import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/img/argentBankLogo.png";

import styles from "./Header.module.scss";

const Header: React.FC = () => {
	return (
		<header className={styles.header}>
			<img className={styles.header__logo} src={Logo} alt="logo" />
			<div className={styles.header__signIn}>
				<i className="fa-solid fa-circle-user"></i>
				<a href="/login">Login</a>
			</div>
		</header>
	);
};

export default Header;
