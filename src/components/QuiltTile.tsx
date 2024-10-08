import styles from "../styles/QuiltTile.module.css";

export const QuiltTile = ( {artist }: any) => {

	return (
		<div className={styles.container}>
			<img
				src={artist.imageLink}
				className={styles.quiltImage}
			/>
		</div>
	);
};
