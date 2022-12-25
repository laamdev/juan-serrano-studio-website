<script>
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

<a
	href={`mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`}
	class="tw-animation rounded-full bg-blue-700 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white hover:bg-blue-800"
	>{emailButtonLabel}</a
>
