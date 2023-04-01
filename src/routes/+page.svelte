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

<div class="flex h-screen flex-col justify-evenly lg:h-full lg:flex-row">
	<div class="grid w-full place-content-center px-2.5 py-5 lg:w-1/2 lg:py-0">
		<h1 class="font-serif text-7xl lg:text-9xl">
			<span class="block font-bold text-stone-900">Juan</span>
			<span class="block italic text-blue-700">Serrano</span>
			<span class="block font-bold text-stone-900">Studio</span>
		</h1>
		<h2 class="mt-2.5 text-lg text-stone-700 lg:mt-5 lg:text-2xl">Muebles Artesanos</h2>
	</div>

	<div
		class="flex w-full gap-x-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-700 sm:overflow-x-hidden lg:h-full lg:max-h-screen lg:w-1/2 lg:flex-col lg:gap-y-10"
	>
		{#each data.homePages[0].featuredProjects as { title, slug, year, images }, index}
			<Card {title} {slug} {year} url={images[0].url} />
		{/each}
	</div>
</div>
