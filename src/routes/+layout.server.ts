let projects = [
	{
		title: 'Robot DNA',
		description: 'The Future of X-Track Mobility',
		info: 'A Website created for a company that specializes in the development of autonomous vehicles. Built with SvelteKit and TailwindCSS.',
		name: 'robot-dna-com',
		icon: 'captive_portal',
		my: false,
		status: 'Completed',
		link: 'https://robot-dna.com',
		linkname: 'Robot DNA',
		direct_redirect: false
	},
	{
		title: 'Notequals',
		description: 'A simple and fast automation builder app.',
		info: 'A simple and fast automation builder app. Built with SvelteKit, TailwindCSS, and a in dun written backend.',
		name: 'notequals-net',
		icon: 'captive_portal',
		my: false,
		status: 'Working',
		link: '',
		direct_redirect: false
	},
	{
		title: 'Blog',
		description: 'My blog is a platform for me to share my interests.',
		info: 'My blog is a platform for me to share my interests and thoughts on various topics. I hope you will find something of interest on my blog.',
		name: 'blog',
		icon: 'description',
		my: true,
		status: 'Working',
		link: '/blog',
		linkname: 'Blog',
		direct_redirect: false
	},
	{
		title: 'Person detection model',
		description: 'A little projects to detect persons with OpenCV and Python.',
		info: 'A little project to a blog post about how to build a person detection model with OpenCV and Python.',
		name: 'how-to-build-a-person-detection-model',
		icon: 'person_search',
		my: false,
		status: 'Archived',
		link: '/projects/how-to-build-a-person-detection-model',
		linkname: 'Detection model',
		direct_redirect: false,
		readmore: true
	},
	{
		title: 'TSC-Home',
		description: 'My Github Profile',
		info: 'My Github Profile. I hope you will find something of interest on my Github Profile.',
		name: 'tsc-home',
		icon: 'description',
		my: true,
		status: 'Github',
		link: 'https://github.com/tsc-home',
		linkname: 'Github',
		direct_redirect: true
	}
];

let posts = [
	{
		title: 'Basics of LLM',
		description: 'How does a language model work?',
		info: 'A little blog post about the basics of a Language Model.',
		name: 'basics-of-llm',
		icon: 'grain',
		my: false,
		status: 'Artificial Intelligence',
		linkname: '',
		link: '',
		direct_redirect: false,
		readmore: true
	},
	{
		title: 'Person detection model',
		description: 'How to build a person detection model with OpenCV and Python.',
		info: 'A little blog post about how to build a person detection model with OpenCV and Python.',
		name: 'how-to-build-a-person-detection-model',
		icon: 'person_search',
		my: false,
		status: 'Artificial Intelligence',
		link: '/projects/how-to-build-a-person-detection-model',
		linkname: 'Detection model',
		direct_redirect: false,
		readmore: true
	},
	{
		title: 'Privacy',
		description: 'Why is privacy important?',
		info: 'A little blog post about why privacy is important. And how you can protect your privacy.',
		name: 'privacy',
		icon: 'privacy_tip',
		my: false,
		status: 'Privacy',
		link: '',
		linkname: 'Privacy',
		direct_redirect: false,
		readmore: true
	},
	{
		title: 'How to code Green?',
		description: 'How to programme more sustainably.',
		info: 'A little blog post about how to programme more sustainably. And how you can reduce your carbon footprint.',
		name: 'how-to-code-green',
		icon: 'eco',
		my: false,
		status: 'Sustainability',
		link: '',
		linkname: 'Sustainability',
		direct_redirect: false,
		readmore: true
	}
];

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
