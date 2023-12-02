import React from "react";

import styles from "./Login.module.scss";

const Login: React.FC = () => {
	return (
		<div className={styles.login}>
			<div className={styles.login__container}>
				<img src="" alt="" />
				<h1>Sign in</h1>
				<div>
					<div>
						<label htmlFor="">Username</label>
						<input type="text" placeholder="Username" />
					</div>
				</div>
				<div>
					<label htmlFor="">Password</label>
					<input type="password" placeholder="Password" />
				</div>
				<div className={styles.login__rememberMe}>
					<input type="checkbox" />
					<p>Remember me</p>
				</div>
				<button>Sign in</button>
			</div>
		</div>
	);
};

export default Login;
