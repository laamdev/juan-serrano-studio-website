<script>
	export let title = '';
	export let year = '';
	export let slug = '';
	export let url = '';
</script>

<li class="tw-animation">
	<a href={`/work/${slug}`} class="grid grid-flow-col">
		<div class="flex flex-col items-center justify-between p-0.5 tracking-wider">
			<h2 class="tw-vertical-text text-base font-bold uppercase lg:text-lg">
				{title}
			</h2>
			<h3 class="tw-vertical-text font-medium text-neutral-700">{year}</h3>
		</div>
		<img src={url} alt={title} />
	</a>
</li>
