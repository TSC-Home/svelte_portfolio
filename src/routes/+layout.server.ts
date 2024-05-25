import { invalidate } from '$app/navigation';

export const load = async ({ fetch }) => {
	try {
		const response = await fetch('/api/spotify');
		const spotifydata = await response.json();
		return { spotify: spotifydata };
	} catch (error) {
		spotify: {
			title: 'Currently not listening to music';
			currentlyPlaying: false;
		}
	}
};
