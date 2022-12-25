<script>
	/**
	 * @type {string | string[]}
	 */
	export let activePage;
</script>

<header
	class="fixed bottom-0.5 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-stone-300 bg-opacity-20 px-3 py-1.5 text-neutral-900 drop-shadow-lg backdrop-blur-lg lg:bottom-2.5"
>
	<ul class="flex gap-x-5 rounded font-medium">
		<li>
			<a href="/" class={`${activePage === '/' && 'text-blue-700'}`}>Proyectos</a>
		</li>
		<li>
			<a href="/info" class={`${activePage.includes('info') ? 'text-blue-700' : ''}`}>Info</a>
		</li>
		<li>
			<a href="/contact" class={`${activePage.includes('contact') ? 'text-blue-700' : ''}`}
				>Contacto</a
			>
		</li>
	</ul>
</header>
