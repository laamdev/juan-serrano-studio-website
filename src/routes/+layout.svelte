<script>
	import Header from './Header.svelte';
	import '../app.css';
	import PageTransition from './PageTransition.svelte';
	/**
	 * @type {{ pathname: any; }}
	 */
	export let data;
</script>

<Header activePage={data.pathname} />

<PageTransition>
	<main class="h-screen">
		<slot />
	</main>
</PageTransition>
