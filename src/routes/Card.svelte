<script>
	export let title = '';
	export let year = '';
	export let slug = '';
	export let url = '';
</script>

<li class="tw-animation w-full p-5 odd:rotate-3 even:-rotate-3 hover:rotate-0">
	<a href={`/work/${slug}`}>
		<p class="text-right text-base font-bold uppercase lg:text-lg">{year}</p>
		<img src={url} alt={title} class="w-[32rem]" />
		<h2 class="text-base font-bold uppercase lg:text-lg">{title}</h2>
	</a>
</li>
