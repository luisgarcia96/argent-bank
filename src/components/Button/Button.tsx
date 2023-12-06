import React from "react";

import styles from "./Button.module.scss";

interface ButtonProps {
	onClick: () => void;
	text: string;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, text, className }) => {
	return (
		<button className={`${styles.button} ${className}`} onClick={onClick}>
			{text}
		</button>
	);
};

export default Button;
