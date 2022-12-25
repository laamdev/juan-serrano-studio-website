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
	class="mx-auto flex flex-col-reverse gap-y-5 pb-10 lg:h-full lg:flex-row lg:gap-y-0 lg:pb-0"
>
	<div class="w-full p-5 lg:w-1/2">
		<h1 class="font-serif text-5xl font-bold lg:text-7xl">{data.project.title}</h1>

		{#if data.project.description}
			<p class="mt-2.5 text-xl text-stone-700 lg:text-2xl">{data.project.description}</p>
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
		class="flex h-96 w-full gap-5 gap-x-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-700 lg:h-full lg:max-h-screen lg:w-1/2 lg:flex-col"
	>
		{#each data.project.images as image, index}
			<img src={image.url} alt={image.alt} class="h-auto w-full object-cover lg:object-contain" />
		{/each}
	</div>
</section>
