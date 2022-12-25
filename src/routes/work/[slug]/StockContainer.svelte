<script>
	import ButtonEmail from '$lib/components/shared/ButtonEmail.svelte';

	/**
	 * @type {any}
	 */
	export let label;
	/**
	 * @type {any}
	 */
	export let value;
	/**
	 * @type {any}
	 */
	export let emailAddress;
	/**
	 * @type {any}
	 */
	export let emailSubject;
	/**
	 * @type {any}
	 */
	export let emailBody;
	/**
	 * @type {any}
	 */
	export let emailButtonLabel;
</script>

<div class="mt-7 lg:mt-10">
	<h3 class="text-sm uppercase text-stone-700 lg:text-base">{label}</h3>
	<div class="flex items-center gap-x-2.5 lg:gap-x-5">
		<p class="text-lg lg:text-xl">{value} unidad disponible</p>
		<ButtonEmail {emailAddress} {emailSubject} {emailBody} {emailButtonLabel} />
	</div>
</div>
