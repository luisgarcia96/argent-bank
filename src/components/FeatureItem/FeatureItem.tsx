import React from "react";

import styles from "./FeatureItem.module.scss";

interface FeatureItemProps {
	title: string;
	description: string;
	imageName: "chat" | "money" | "security";
}

const FeatureItem: React.FC<FeatureItemProps> = ({
	title,
	description,
	imageName,
}) => {
	return (
		<div className={styles.featureItem}>
			<img
				className={styles.image}
				src={`${
					import.meta.env.VITE_PUBLIC_URL
				}/src/assets/img/icon-${imageName}.png`}
				alt={`Image-${imageName}`}
			/>
			<h3 className={styles.title}>{title}</h3>
			<p className={styles.description}>{description}</p>
		</div>
	);
};

export default FeatureItem;
