<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { derived } from 'svelte/store';

	// Check if the user is on the home page
	const isHome = derived(page, ($page) => $page.url.pathname === '/');

	const navigateHome = () => goto('/');

	const someFutureAction = () => console.log("Nothing yet");
</script>

<div class="layout-container">
	<header class="navbar">
		<div class="nav-left">
			{#if !$isHome}
				<button on:click={() => history.back()} class="back-btn">{"< Back"}</button>
			{/if}
		</div>
		
		<div class="nav-center">
			<button on:click={navigateHome} class="home-btn">Algo Mastery</button>
		</div>

		<div class="nav-right">
			<!-- Placeholder for future content -->
			<button class="settings-btn" on:click={someFutureAction}>⚙️</button>

		</div>
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

	.navbar {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		background: #333;
		color: white;
		position: sticky;
		top: 0;
		z-index: 1000;
	}

	.nav-left,
	.nav-right {
		width: 100px; /* Ensures equal spacing */
		display: flex;
		justify-content: center;
	}

	.nav-center {
		flex-grow: 1;
		display: flex;
		justify-content: center;
	}

	.back-btn,
	.home-btn,
	.settings-btn {
		background: none;
		border: none;
		color: white;
		font-size: 1.2rem;
		cursor: pointer;
	}

	.back-btn:hover,
	.home-btn:hover {
		text-decoration: underline;
	}
</style>