<script lang="ts">
	import { Card } from '$lib';
	import { Cards } from '$lib/api/CardData';
	import { onMount } from 'svelte';

	// Sort by if unlocked is true, and put those elements first
	Cards.sort((cardA, cardB) => {
  if (cardA.unlocked && !cardB.unlocked) {
    return -1; // cardA comes first
  } else if (!cardA.unlocked && cardB.unlocked) {
    return 1; // cardB comes first
  } else {
    return 0; // no change in order
  }
});

	onMount(() => {
		// console.clear(); // clear the console of anything left over
	})
</script>

<div class="page">
	<h1>My Engineering Journal</h1>
	<p>Select the Topic to Review:</p>

	<div class="grid-container">
		{#each Cards as { id, url, img, desc, type, unlocked } (id)}
			<Card {url} {img} {desc} {type} {unlocked} />
		{/each}
	</div>
</div>

<style>
	h1, p {
		font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
	}
	.page {
		max-width: 800px;
		margin: auto;
		padding: 2rem;
		text-align: center;
	}

	.grid-container {
		width: 50vw;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
		gap: 1rem;
		padding: 1rem;
	}
</style>
