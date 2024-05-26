<script lang="ts">
	import HeaderBlog from './../../lib/headerBlog.svelte';
	import Footer from '$lib/home/footer.svelte';
	import Card from '$lib/projects/Card.svelte';

	export let data;

	let projects = [
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
</script>

<svelte:head>
	<title>Blog | ZERO</title>
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
	<HeaderBlog {data} />
	<main class="flex-1">
		<section id="more" class=" flex w-full justify-center bg-gray-100 py-12 md:py-24 lg:py-32">
			<div class="container px-4 md:px-6">
				<div class="flex flex-col items-center justify-center space-y-4 text-center">
					<div class="space-y-2">
						<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Blog</h2>
						<p
							class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
						>
							Welcome to my blog. Here you will find a collection of my thoughts and experiences on
							various topics. I hope you will find something of interest here. Enjoy!🚀
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
