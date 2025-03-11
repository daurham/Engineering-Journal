<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';



	// Dynamically determine page title
	const pageTitle = derived(page, ($page) =>
		$page.url.pathname === '/' ? 'Algo Mastery' : 'Home'
	);

	const navigateHome = () => goto('/');
</script>

<div class="layout-container">
	<header class="navbar">
		{#if $pageTitle !== "Algo Mastery"}
			<button on:click={navigateHome} class="back-btn">
				{"< Back"}
			</button>
		{/if}
		<button on:click={navigateHome}>
			{$pageTitle}
		</button>

		{#if $pageTitle !== "Algo Mastery"}
		<button on:click={navigateHome} class="back-btn">
			
		</button>
	{/if}

	</header>

	<main>
		<slot />
	</main>
</div>

<style>
	.layout-container {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.back-btn {
		float: left;
	}

	.navbar {
		width: 100%;
		padding: 1rem;
		background: #333;
		color: white;
		text-align: center;
		position: sticky;
		top: 0;
		z-index: 1000;
	}

	.navbar button {
		background: none;
		border: none;
		color: white;
		font-size: 1.2rem;
		cursor: pointer;
	}

	.navbar button:hover {
		text-decoration: underline;
	}

	main {
		width: 100%;
		max-width: 1200px;
		padding: 1rem;
	}
</style>
