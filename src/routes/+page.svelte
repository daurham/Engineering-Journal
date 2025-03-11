<script lang="ts">
	import type { CardData } from '$lib/CardData';
	import Card from '$lib/Card.svelte';
	import { Cards } from '$lib/CardData';
	import { onMount } from 'svelte';

	console.log('CardData:', Cards);
	onMount(() => {
		// console.clear(); // clear the console of anything left over
	})
</script>

<div class="page">
	<h1>Welcome to Algo Practice</h1>
	<p>Select the Algorithm or Data Structure to Review:</p>

	<div class="grid-container">
		{#each Cards as { id, url, img, desc, type, unlocked } (id)}
			<Card {url} {img} {desc} {id} {type} {unlocked} />
		{/each}
	</div>
</div>

<style>
	.page {
		max-width: 800px;
		margin: auto;
		padding: 2rem;
		text-align: center;
	}

	.grid-container {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1rem;
		padding: 1rem;
	}
</style>
