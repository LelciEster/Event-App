<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<main class="page">
	{@render children()}
</main>

<footer class="footer">
	<div class="footer-section">
		<h3>Contact</h3>
		<a href="mailto:estlel20@htl-shkoder.com">Email us</a>
	</div>

	<div class="footer-section">
		<h3>Admin</h3>
		<a href="/admin">Admin panel</a>
	</div>
</footer>

<style>
	:global(html, body) {
		margin: 0;
		padding: 0;
		height: 100%;
	}

	:global(body) {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	.page {
		flex: 1; 
	}

	.footer {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 0.6rem;
		padding: 0.8rem 1rem 0px 0.8rem;
		text-align: center;
		background: #f9f9f9;
	}

	.footer-section h3 {
		margin: 0.2rem 0;
	}

	.footer a {
		text-decoration: none;
		color: #333;
		font-weight: 200;
	}
</style>
