import React from "react";

import Button from "../../components/Button/Button";

import styles from "./Login.module.scss";
import { useDispatch } from "react-redux";

const Login: React.FC = () => {
	const [username, setUsername] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [rememberMe, setRememberMe] = React.useState(false);
	
	const dispatch = useDispatch();

	return (
		<div className={styles.login}>
			<div className={styles.login__container}>
				<i className="fa-solid fa-circle-user"></i>
				<h1>Sign in</h1>

				<div className={styles.login__input}>
					<label htmlFor="">Username</label>
					<input
						type="text"
						placeholder=""
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</div>

				<div className={styles.login__input}>
					<label htmlFor="">Password</label>
					<input
						type="password"
						placeholder=""
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</div>
				<div className={styles.login__rememberMe}>
					<input
						type="checkbox"
						checked={rememberMe}
						onChange={() => setRememberMe(!rememberMe)}
					/>
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
