<script>
	import DetailContainer from './DetailContainer.svelte';
	import PriceContainer from './PriceContainer.svelte';
	import { PORTFOLIO_NAME } from '$lib/constants';
	import StockContainer from './StockContainer.svelte';

	/**
	 * @type {{ project: { title: any; description: any; materials: any; price: any; year: any; stock: any; images: any; }; }}
	 */
	export let data;
</script>

<svelte:head>
	<title>{data.project.title} | {PORTFOLIO_NAME}</title>
</svelte:head>

<section
	class="mx-auto flex flex-col-reverse gap-y-5 pb-10 md:h-full md:flex-row md:gap-y-0 md:pb-0"
>
	<img
		src="/images/scroll-icon.png"
		alt="Scroll icon."
		class="fixed right-5 top-5 z-50 hidden h-24 w-24 animate-spin-slow duration-1000 md:block"
	/>
	<img
		src="/images/drag-icon.png"
		alt="Drag icon."
		class="fixed right-5 top-5 z-50 block h-16 w-16 animate-spin-slow duration-1000 md:hidden"
	/>
	<div class="w-full px-2.5 pb-10 md:w-1/2 md:p-10 md:pb-0">
		<h1 class="font-serif text-5xl font-bold md:text-7xl">{data.project.title}</h1>

		{#if data.project.description}
			<p class="mt-2.5 text-xl text-stone-700 md:text-2xl">{data.project.description}</p>
		{/if}

		<hr class="mt-5 border-t-2 border-stone-900" />

		{#if data.project.materials}
			<DetailContainer label="Materiales" value={data.project.materials} />
		{/if}

		{#if data.project.price}
			<PriceContainer
				label="Precio"
				value={data.project.price}
				emailAddress="jserranopalencia@gmail.com"
				emailSubject={`Encargar ${data.project.title}.`}
				emailBody={`Hola, estoy interesado en encargar la construcción de un ${data.project.title}.`}
				emailButtonLabel="Encargar"
			/>
		{/if}

		{#if data.project.year}
			<DetailContainer label="Año" value={data.project.year} />
		{/if}

		{#if data.project.stock}
			<StockContainer
				label="Stock"
				value={data.project.stock}
				emailAddress="jserranopalencia@gmail.com"
				emailSubject={`Reservar ${data.project.title}.`}
				emailBody={`Hola, estoy interesado en reservar una de las unidades de ${data.project.title} que está en stock.`}
				emailButtonLabel="Reservar"
			/>
		{/if}
	</div>
	<div
		class="flex w-full gap-x-5 overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-700 sm:overflow-x-hidden md:h-full md:max-h-screen md:w-1/2 md:flex-col md:gap-y-10"
	>
		{#each data.project.images as image, index}
			<img
				src={image.url}
				alt={image.alt}
				class="h-auto w-screen object-cover md:w-full md:object-contain"
			/>
		{/each}
	</div>
</section>
