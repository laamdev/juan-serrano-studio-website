<script>
	export let data;
</script>

<section class="mx-auto grid h-full grid-cols-1 gap-y-5 lg:grid-cols-2 lg:gap-y-0">
	<div class="col-span-1 p-10">
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
		class="col-span-1 flex h-80 gap-5 gap-x-5 overflow-y-scroll scrollbar-thin scrollbar-thumb-blue-700 lg:h-full lg:max-h-screen lg:flex-col"
	>
		{#each data.project.images as image, index}
			<img src={image.url} alt={image.alt} class="h-auto w-full object-contain" />
		{/each}
	</div>
</section>
