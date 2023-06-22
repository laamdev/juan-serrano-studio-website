<script>
	import { PORTFOLIO_NAME, PORTFOLIO_TAGLINE } from '$lib/constants';
	import Card from './Card.svelte';
	/**
	 * @type {{ homePages: any; }}
	 */
	export let data;
	// let pathname;
	// onMount(async () => {
	// 	pathname = $page.url.pathname;
	// });
	// const { siteUrl, name: siteName, openGraphDefaultImage } = $siteMetadataStore || [];
</script>

<svelte:head>
	<title>{PORTFOLIO_NAME} | {PORTFOLIO_TAGLINE}</title>
</svelte:head>

<div class="flex h-screen flex-col justify-evenly md:h-full md:flex-row">
	<img
		src="/images/scroll-icon.png"
		alt="Scroll icon."
		class="fixed right-5 top-5 z-50 hidden h-24 w-24 animate-spin-slow duration-1000 md:block"
	/>
	<div class="grid w-full place-content-center px-2.5 py-5 md:w-1/2 md:py-0">
		<h1 class="font-serif text-7xl md:text-9xl">
			<span class="block font-bold text-stone-900">Juan</span>
			<span class="block italic text-blue-700">Serrano</span>
			<span class="block font-bold text-stone-900">Studio</span>
		</h1>
		<h2 class="mt-2.5 text-lg text-stone-700 md:mt-5 md:text-2xl">Muebles Artesanos</h2>
	</div>

	<div class="relative w-full md:max-h-screen md:w-1/2">
		<div
			class="flex gap-x-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-700 sm:overflow-x-hidden md:h-full md:flex-col md:gap-y-10"
		>
			{#each data.homePages[0].featuredProjects as { title, slug, year, images }, index}
				<Card {title} {slug} {year} url={images[0].url} />
			{/each}
		</div>

		<img
			src="/images/drag-icon.png"
			alt="Drag icon."
			class="absolute bottom-5 right-5 z-50 block h-16 w-16 animate-spin-slow duration-1000 md:hidden"
		/>
	</div>
</div>
