<script>
	export let data;
</script>

<section
	class="mx-auto flex flex-col-reverse gap-y-5 gap-x-10 pb-10 lg:h-full lg:flex-row lg:gap-y-0 lg:pb-0"
>
	<div class="w-full lg:w-1/2">
		<h1 class="font-serif text-5xl font-bold lg:text-7xl">{data.project.title}</h1>

		{#if data.project.description}
			<p class="mt-2.5 text-xl text-stone-700 lg:text-2xl">{data.project.description}</p>
		{/if}

		<hr class="mt-5 border-t-2 border-stone-900" />

		{#if data.project.materials}
			<div class="mt-10">
				<p class="text-sm uppercase text-stone-700">Materiales</p>
				<p class="text-xl">{data.project.materials}</p>
			</div>
		{/if}

		{#if data.project.price}
			<div class="mt-10">
				<p class="text-sm uppercase text-stone-700">Precio</p>
				<div class="flex items-center gap-x-2.5">
					<p class="text-xl">desde €{data.project.price}</p>
					<a
						href="mailto:jserranopalencia@gmail.com"
						class="tw-animation rounded-full bg-blue-700 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-blue-800"
						>Encargar</a
					>
				</div>
			</div>
		{/if}

		{#if data.project.year}
			<div class="mt-10">
				<p class="text-sm uppercase text-stone-700">Año</p>
				<p class="text-xl">{data.project.year}</p>
			</div>
		{/if}

		{#if data.project.stock}
			<div class="mt-10 flex items-center gap-x-2.5 text-xl">
				<p>
					<span class="font-medium">{data.project.stock}</span>
					<span class="text-stone-700">unidad lista en stock</span>
				</p>
				<a
					href="mailto:jserranopalencia@gmail.com"
					class="tw-animation rounded-full bg-blue-700 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-blue-800"
					>Reservar</a
				>
			</div>
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
