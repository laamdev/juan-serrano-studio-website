<script>
	export let label = '';
	export let value = '';
	export let unit = '';
</script>

<div class="mt-7 md:mt-10">
	<h3 class="text-sm uppercase text-stone-700 md:text-base">{label}</h3>
	<p class="text-lg md:text-xl">{unit}{value}</p>
</div>
