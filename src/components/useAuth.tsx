import { useState, useEffect } from "react";
import axios from "axios";

export const useAuth = (code: string) => {
	const [accessToken, setAccessToken] = useState();

	useEffect(() => {
		const fetchToken = async () => {
			await axios
				.post(process.env.SERVER_LOGIN_URL, {
					code,
				})
				.then((res) => {
					setAccessToken(res.data.accessToken);
				})
				.catch((err) => {
					console.log(err);
				});
		};

		fetchToken();
	}, []);

	return accessToken;
};
