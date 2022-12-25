<script>
	export let label = '';
	export let value = '';
	export let unit = '';
</script>

<div class="mt-7 lg:mt-10">
	<h3 class="text-sm uppercase text-stone-700 lg:text-base">{label}</h3>
	<p class="text-lg lg:text-xl">{unit}{value}</p>
</div>
