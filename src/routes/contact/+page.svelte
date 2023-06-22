<script>
	import { PORTFOLIO_NAME } from '$lib/constants';

	export let data;
	const { email, phone, instagram, image } = data.info.contact;
</script>

<svelte:head>
	<title>Contact | {PORTFOLIO_NAME}</title>
</svelte:head>

<section
	class="mx-auto flex flex-col-reverse gap-y-5 pb-20 md:h-full md:flex-row md:gap-y-0 md:pb-0"
>
	<ul
		class="flex flex-col place-content-center gap-y-5 px-2.5 font-serif text-6xl font-bold md:w-1/2 md:p-10 md:text-7xl"
	>
		<li class="tw-animation hover:text-blue-700">
			<a href={`mailto:${email}`}>Email</a>
		</li>
		<li class="tw-animation hover:text-blue-700">
			<a href={`tel:${phone}`}>Teléfono</a>
		</li>
		<li class="tw-animation hover:text-blue-700">
			<a href={instagram} target="_blank" rel="”noopener noreferrer">Instagram</a>
		</li>
	</ul>
	<div class="flex w-full overflow-hidden md:h-full md:max-h-screen md:w-1/2 md:flex-col">
		<img src={image.url} alt={image.alt} class="object-cover" />
	</div>
</section>
