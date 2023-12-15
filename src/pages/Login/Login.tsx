import React from "react";

import { useDispatch } from "react-redux";
import { loginUser } from "../../features/authSlice";
import { AppDispatch } from "../../store/store";
import Button from "../../components/Button/Button";

import styles from "./Login.module.scss";

const Login: React.FC = () => {
	const [email, setEmail] = React.useState("");
	const [password, setPassword] = React.useState("");
	const [rememberMe, setRememberMe] = React.useState(false);

	const dispatch: AppDispatch = useDispatch();

	const handleLogin = () => {
		const userCredentials = {
			email,
			password,
		};
		console.log(dispatch(loginUser(userCredentials)));
	};

	return (
		<div className={styles.login}>
			<div className={styles.login__container}>
				<i className="fa-solid fa-circle-user"></i>
				<h1>Sign in</h1>

				<div className={styles.login__input}>
					<label htmlFor="">Email</label>
					<input
						type="text"
						placeholder=""
						value={email}
						onChange={(e) => setEmail(e.target.value)}
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
					onClick={handleLogin}
				/>
			</div>
		</div>
	);
};

export default Login;
