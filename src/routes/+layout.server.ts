export const load = async ({ fetch, url }) => {
	try {
		const response = await fetch('/api/spotify');
		const spotifydata = await response.json();
		return { spotify: spotifydata, url: url.pathname };
	} catch (error) {
		spotify: {
			title: 'Currently not listening to music';
			currentlyPlaying: false;
		}
	}
};
