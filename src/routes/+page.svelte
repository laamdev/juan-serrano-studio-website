<script>
	import { PORTFOLIO_NAME, PORTFOLIO_TAGLINE } from '$lib/constants';
	import Card from './Card.svelte';
	/**
	 * @type {{ projects: any; }}
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

<div class="mx-auto grid h-screen grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1">
	<div class="row-span-1 flex flex-col place-content-center place-items-center">
		<div class="flex flex-col gap-y-2.5">
			<h1 class="font-serif text-7xl lg:text-9xl">
				<span class="block font-bold text-stone-900">Juan</span>
				<span class="block italic text-blue-700">Serrano</span>
				<span class="block font-bold text-stone-900">Studio</span>
			</h1>
			<h2 class="mt-2.5 text-lg text-stone-700 lg:mt-5 lg:text-2xl">Muebles Artesanos</h2>
		</div>
	</div>
	<div
		class="row-span-1 flex flex-col gap-x-5 gap-y-5 scrollbar-thin scrollbar-thumb-blue-700 lg:h-full lg:flex-col lg:gap-y-10"
	>
		{#each data.projects as { title, slug, year, images }, index}
			<Card {title} {slug} {year} url={images[0].url} />
		{/each}
	</div>
</div>
