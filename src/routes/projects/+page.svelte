<script lang="ts">
	import Footer from '$lib/home/footer.svelte';
	import Card from '$lib/projects/Card.svelte';
	import Header from '$lib/header.svelte';

	export let data;

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
</script>

<svelte:head>
	<title>Portfolio | ZERO</title>
	<meta
		name="description"
		content="ZERO is a backend developer and AI engineer with a passion for building scalable and efficient web applications and artificial intelligence. synthetix.me"
	/>
	<meta
		name="keywords"
		content="backend developer, ai engineer, web applications, artificial intelligence, synthetix.me, Zero, ZERO,tschome, tsc-home, TSC-HOME, synthetix, planty, projects, portfolio, work, experience, contact, contact me, contact form, email, email me"
	/>
	<meta name="author" content="ZERO" />
	<meta name="robots" content="index, follow" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<meta name="theme-color" content="#ffffff" />
</svelte:head>
<div class="flex min-h-[100dvh] flex-col">
	<Header {data} />
	<main class="flex-1">
		<section id="more" class=" flex w-full justify-center bg-gray-100 py-24 md:py-24 lg:py-32">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Portfolio</h2>
						<p
							class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Hello there!👋 I've put together a little collection of my work that I'm happy to
							share with you. I hope you enjoy it!
						</p>
					</div>
				</div>
				<div class="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12">
					{#each projects as project, i}
						<Card projects={projects[i]} />
					{/each}
				</div>
			</div>
		</section>
	</main>
	<Footer />
</div>
