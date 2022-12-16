<script>
	import Card from './Card.svelte';

	export let data;
	// let pathname;
	// onMount(async () => {
	// 	pathname = $page.url.pathname;
	// });
	// const { siteUrl, name: siteName, openGraphDefaultImage } = $siteMetadataStore || [];
</script>

<div class="mx-auto grid grid-cols-1 gap-y-10 py-5 lg:grid-cols-2 lg:py-0">
	<div class="col-span-1 flex flex-col place-content-center place-items-center">
		<h1 class="font-serif text-7xl lg:text-9xl">
			<span class="block font-bold text-neutral-900">Juan</span>
			<span class="ml-20 block italic text-blue-700">Serrano</span>
			<span class="ml-40 block font-bold text-neutral-900">Studio</span>
		</h1>
		<h2 class="mt-2.5 text-center text-lg text-neutral-700 lg:mt-5 lg:text-2xl">
			Muebles Artesanos
		</h2>
	</div>
	<ul
		class="col-span-1 flex h-full flex-col gap-y-10 gap-x-5 overflow-y-scroll px-2.5 scrollbar-thin scrollbar-thumb-blue-700 lg:max-h-screen lg:px-0"
	>
		{#each data.projects as { title, slug, year, images }, index}
			<Card {title} {slug} {year} url={images[0].url} />
		{/each}
	</ul>
</div>
