<script>
	export let title = '';
	export let year = '';
	export let slug = '';
	export let url = '';
</script>

<a href={`/work/${slug}`} class="tw-animation relative flex aspect-square max-w-full">
	<h2
		class="tw-vertical-text bg absolute flex items-baseline gap-x-2.5 bg-stone-50 bg-opacity-50 py-2.5 drop-shadow-lg backdrop-blur-lg"
	>
		<span class="inline-block text-lg font-bold uppercase tracking-wider lg:text-xl">
			{title}
		</span>
		<span class="inline-block text-base font-medium text-stone-700 lg:text-lg">
			{year}
		</span>
	</h2>
	<img src={url} alt={title} class="object-cover" />
</a>
