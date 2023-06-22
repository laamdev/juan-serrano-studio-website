<script>
	import clsx from 'clsx';
	/**
	 * @type {string | string[]}
	 */
	export let activePage;
</script>

<header
	class="fixed bottom-0.5 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-blue-700 px-3 py-1.5 text-neutral-900 md:bottom-2.5"
>
	<ul class="flex gap-x-5 rounded font-medium">
		<li>
			<a
				href="/"
				class={clsx(
					activePage === '/' ? 'italic text-stone-100' : 'tw-animation hover:text-stone-300'
				)}>Proyectos</a
			>
		</li>
		<li>
			<a
				href="/info"
				class={clsx(
					activePage.includes('info')
						? 'italic text-stone-100'
						: 'tw-animation hover:text-stone-300'
				)}>Info</a
			>
		</li>
		<li>
			<a
				href="/contact"
				class={clsx(
					activePage.includes('contact')
						? 'italic text-stone-100'
						: 'tw-animation hover:text-stone-300'
				)}>Contacto</a
			>
		</li>
	</ul>
</header>
