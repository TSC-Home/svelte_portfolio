<script lang="ts">
	import { Application } from '@splinetool/runtime';
	import { onMount } from 'svelte';
	let laodepalanty = false;

	let planty: HTMLCanvasElement;
	onMount(() => {
		setTimeout(() => {
			const app = new Application(planty);
			app.load('https://prod.spline.design/pNZ2ey7WAt1LCQuH/scene.splinecode');
		}, 1);
	});
</script>

<section class="w-full p-12 md:p-24 lg:p-32">
	<div class="container px-4 md:px-6">
		<div class="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-16">
			<div class="space-y-4">
				<div class="animate-fadeIn animate-delay-[1000ms]">
					<h1
						class="animate-slideInUp animate-delay-[950ms] flex text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl"
					>
						ZERO
					</h1>
					<h2
						class="animate-slideInUp animate-delay-[950ms] flex text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl"
					>
						Backend Developer & <br /> AI Engeneer
					</h2>
				</div>
				<div class="animate-fadeIn animate-delay-[1000ms]">
					<p class="animate-slideInUp animate-delay-[950ms] max-w-[600px] text-gray-500 md:text-xl">
						Experienced backend developer with a passion for building scalable and efficient web
						applications and artificial intelligence. Proficient in multiple programming languages
						and frameworks.
					</p>
				</div>
			</div>
			<div class="animate-fadeIn animate-delay-[1000ms] flex justify-center">
				<div class="animate-slideInUp animate-delay-[950ms] w-[350px]">
					<canvas id="planty" bind:this={planty} class="h-full w-full"></canvas>
				</div>
			</div>
		</div>
	</div>
</section>
