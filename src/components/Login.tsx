import styles from "../styles/Login.module.css";
import { REDIRECT_URL_ENV } from "../env";

const SPOTIFY_BASE_AUTH = "https://accounts.spotify.com/authorize";
const CLIENT_ID = process.env.CLIENT_ID;
const REDIRECT_URL = process.env.REDIRECT_URL;
const SPACE_DELIMITER = "%20";
const SCOPES = ["user-top-read"];
const SCOPES_PARAM = SCOPES.join(SPACE_DELIMITER);

const AUTH_URL = `${SPOTIFY_BASE_AUTH}?client_id=${CLIENT_ID}
&response_type=code&redirect_uri=${REDIRECT_URL}&scope=${SCOPES_PARAM}&state=12345678`;

export const Login = () => {
	return (
		<div>
			<div className={styles.login_container}>
				<h1 className={styles.title}>Quiltify</h1>
				<a href={AUTH_URL}>
					<button className={styles.button}>Login to Spotify</button>
				</a>
			</div>
		</div>
	);
};
