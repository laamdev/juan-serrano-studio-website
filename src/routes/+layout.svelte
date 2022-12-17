<script>
	import Header from './Header.svelte';
	import '../app.css';
</script>

<Header />

<main class="h-screen px-2.5 py-7 lg:p-10">
	<slot />
</main>
