<script>
	import { PORTFOLIO_NAME } from '$lib/constants';

	export let data;
	const { email, phone, instagram } = data.contact;
</script>

<svelte:head>
	<title>Contact | {PORTFOLIO_NAME}</title>
</svelte:head>

<section class="flex h-screen flex-col lg:flex-row">
	<div class="flex w-full flex-col place-content-center gap-y-5 p-10 lg:w-1/2">
		<p class="text-lg lg:text-2xl">
			Contáctame para ordenar la construcción de cualquiera de nuestros diseños o reservar una
			unidad en stock. También estoy disponible para comisiones personalizadas o restauraciones.
		</p>
	</div>
	<ul
		class="grid h-full w-full place-content-center gap-y-5 font-serif text-5xl font-bold lg:w-1/2 lg:text-7xl"
	>
		<li>
			<a href={`mailto:${email}`}>Email</a>
		</li>
		<li>
			<a href={`tel:${phone}`}>Phone</a>
		</li>
		<li>
			<a href={instagram} target="_blank" rel="”noopener noreferrer">Instagram</a>
		</li>
	</ul>
</section>
