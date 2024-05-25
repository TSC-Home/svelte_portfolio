import {
	SECRET_SPOTIFY_CLIENT_ID,
	SECRET_SPOTIFY_CLIENT_SECRET,
	SECRET_SPOTIFY_NOW_PLAYING_ENDPOINT,
	SECRET_SPOTIFY_REFRESH_TOKEN,
	SECRET_SPOTIFY_TOKEN_ENDPOINT
} from '$env/static/private';
import { json } from '@sveltejs/kit';
import querystring from 'querystring';
import type { SpotifyNowPlaying } from './types';

type AccesstokenResponse = {
	access_token: string;
	token_type: 'Bearer';
	expires_in: number;
};

async function getAccessToken(): Promise<AccesstokenResponse> {
	const basic = Buffer.from(`${SECRET_SPOTIFY_CLIENT_ID}:${SECRET_SPOTIFY_CLIENT_SECRET}`).toString(
		'base64'
	);
	const response = await fetch(SECRET_SPOTIFY_TOKEN_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Basic ${basic}`,
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: querystring.stringify({
			grant_type: 'refresh_token',
			refresh_token: SECRET_SPOTIFY_REFRESH_TOKEN
		})
	});
	if (!response.ok) {
		throw new Error('fail to fetch accestoken');
	}
	return response.json();
}

async function getNowPlaying(): Promise<SpotifyNowPlaying> {
	const token = await getAccessToken();
	const response = await fetch(SECRET_SPOTIFY_NOW_PLAYING_ENDPOINT, {
		headers: {
			Authorization: `Bearer ${token.access_token}`
		}
	});
	if (!response.ok) {
		throw new Error('fail to get nowplaying');
	}
	const data = await response.json();
	return data;
}

export async function GET() {
	try {
		const response = await getNowPlaying();

		const song = {
			title: response.item.name,
			time: {
				progress: response.progress_ms,
				duration: response.item.duration_ms,
				remaining: response.item.duration_ms - response.progress_ms
			},
			artist: response.item.artists.map((artist: { name: string; id: string }) => ({
				name: artist.name,
				id: artist.id
			})),
			album: {
				name: response.item.album.name,
				id: response.item.album.id,
				image: response.item.album.images[0].url
			},
			isrc: response.item.external_ids.isrc,
			image: response.item.album.images[0].url,
			url: response.item.external_urls.spotify,
			currentlyPlaying: response.is_playing,
			preview: response.item.preview_url
		};
		return json(song);
	} catch (error) {}
}
