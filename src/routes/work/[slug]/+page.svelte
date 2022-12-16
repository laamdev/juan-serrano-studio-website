<script>
	export let data;
</script>

<section
	class="mx-auto flex h-full grid-cols-1 flex-col-reverse gap-y-5 pb-5 lg:flex-row lg:gap-y-0 lg:py-0"
>
	<div class="w-full px-2.5 lg:w-1/2 lg:px-10">
		<h1 class="font-serif text-5xl font-bold lg:text-8xl">{data.project.title}</h1>

		{#if data.project.description}
			<p class="mt-2.5 text-xl text-neutral-700 lg:text-3xl">{data.project.description}</p>
		{/if}

		<hr class="mt-5 border-t-2 border-neutral-900" />

		{#if data.project.materials}
			<div class="mt-10">
				<p class="text-sm uppercase text-neutral-700">Materiales</p>
				<p class="text-xl">{data.project.materials}</p>
			</div>
		{/if}

		{#if data.project.price}
			<div class="mt-10">
				<p class="text-sm uppercase text-neutral-700">Precio</p>
				<div class="flex items-center gap-x-3">
					<p class="text-xl">desde €{data.project.price}</p>
					<a
						href="mailto:jserranopalencia@gmail.com"
						class="tw-animation rounded-full bg-blue-700 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-blue-800"
						>Encárgalo</a
					>
				</div>
			</div>
		{/if}

		{#if data.project.year}
			<div class="mt-10">
				<p class="text-sm uppercase text-neutral-700">Año</p>
				<p class="text-xl">{data.project.year}</p>
			</div>
		{/if}

		{#if data.project.stock}
			<div class="mt-20 flex items-center justify-between gap-x-12">
				<p>
					<span class="text-xl font-bold">{data.project.stock}</span> <span>unidad en stock</span>
				</p>
				<button
					class="rounded-full bg-neutral-900 px-6 py-3 font-medium uppercase tracking-wider text-neutral-50"
					>Resérvalo</button
				>
			</div>
		{/if}
	</div>
	<div
		class="flex h-full w-full gap-5 gap-x-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-700 lg:max-h-screen lg:w-1/2 lg:flex-col"
	>
		{#each data.project.images as image, index}
			<img src={image.url} alt={image.alt} class="h-auto w-full object-cover lg:object-contain" />
		{/each}
	</div>
</section>
