import { useAuth } from "./useAuth";
import { useEffect, useState } from "react";
import { QuiltTile } from "./QuiltTile";
import SpotifyWebApi from "spotify-web-api-node";
import styles from "../styles/Quilt.module.css";
import { ArtistInfo } from "@/interfaces/ArtistInfo";
import { useRouter } from "next/router";

const spotifyApi = new SpotifyWebApi({
	clientId: process.env.CLIENT_ID,
});

const SPOTIFY_LOGOUT_URL = "https://accounts.spotify.com/en/logout";

export const Quilt = () => {
	const router = useRouter();
	const {
		query: { code },
	}: any = router;
	const accessToken = useAuth(code);
	const [quiltTiles, setQuiltTiles]: any = useState();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		if (accessToken === undefined) return;
		spotifyApi.setAccessToken(accessToken);

		spotifyApi.getMyTopArtists({ time_range: "long_term" }).then((res) => {
			if (res.body.items === undefined) return;
			const artists = res.body.items;
			const artistTiles: ArtistInfo[] = artists.map((artist) => {
				let artistTile: ArtistInfo = {
					name: artist.name,
					imageLink: artist.images[0].url,
					spotifyUrl: artist.external_urls.spotify,
				};
				return artistTile;
			});
			setQuiltTiles(artistTiles);
			setIsLoading(false);
		});
	}, [accessToken]);

	if (isLoading) {
		return <></>;
	}

	return (
		<div className={styles.background}>
			<h1>Your Quilt</h1>
			<div className={styles.quilt} id="quilt">
				{quiltTiles.map((artist: ArtistInfo, i: number) => {
					return <QuiltTile key={i} artist={artist} />;
				})}
			</div>
			<a href={SPOTIFY_LOGOUT_URL}>
				<button>LOGOUT</button>
			</a>
		</div>
	);
};
