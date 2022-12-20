<script>
	import { fade } from 'svelte/transition';
	let outroFinished = true;
	import { navigating } from '$app/stores';
</script>

{#key $navigating}
	{#if navigating && outroFinished}
		<div
			transition:fade={{ duration: 500 }}
			on:outrostart={() => {
				outroFinished = false;
			}}
			on:outroend={() => {
				outroFinished = true;
			}}
		>
			<slot />
		</div>
	{/if}
{/key}
