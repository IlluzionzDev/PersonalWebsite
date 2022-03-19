<script lang="ts">
	// Add Header and Footer to every page
	import '../css/global.scss';
	import Nav from "$components/Nav.svelte"
	import Footer from "$components/Footer.svelte"
</script>

<Nav />

<main>
	<slot />
</main>

<Footer />

