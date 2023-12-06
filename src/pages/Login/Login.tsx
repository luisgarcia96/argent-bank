import React from "react";

import Button from "../../components/Button/Button";

import styles from "./Login.module.scss";

const Login: React.FC = () => {
	return (
		<div className={styles.login}>
			<div className={styles.login__container}>
				<i className="fa-solid fa-circle-user"></i>
				<h1>Sign in</h1>

				<div className={styles.login__input}>
					<label htmlFor="">Username</label>
					<input type="text" placeholder="" />
				</div>

				<div className={styles.login__input}>
					<label htmlFor="">Password</label>
					<input type="password" placeholder="" />
				</div>
				<div className={styles.login__rememberMe}>
					<input type="checkbox" />
					<p>Remember me</p>
				</div>
				<Button
					className={styles.login__button}
					text="Sign In"
					onClick={() => {}}
				/>
			</div>
		</div>
	);
};

export default Login;
