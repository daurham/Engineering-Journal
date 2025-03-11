<script lang="ts">
	import type { TopicTypes } from "$lib/types";

	export let url: string;
	export let img: string | null = null;
	export let desc: string;
	export let type: TopicTypes;
	export let unlocked: boolean;

	const darkMode = false;

	let borderColor = '';
	if (type === 'data-structure') borderColor = '#275e39';
	if (type === 'algorithm') borderColor = '#27435e';
	if (type === 'concept') borderColor = '#c29e0f'; // or #5e5527

	if (darkMode) {
		// Update for darkMode
		if (type === 'data-structure') borderColor = '#275e39';
		if (type === 'algorithm') borderColor = '#27435e';
		if (type === 'concept') borderColor = '#c29e0f'; // or #5e5527
	}

	let className = unlocked ? 'card' : 'locked-card';
</script>

<a href={unlocked ? url : ''} class={className} style="border: 4px solid {borderColor};">
	{#if img}
		<!-- svelte-ignore a11y_img_redundant_alt -->
		<img src={img} alt="Card image" class="card-img" />
	{/if}
	<p class="card-desc">{desc}</p>
</a>

<style>
	.card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
		transition: transform 0.2s ease-in-out;
		background: white;
	}
	.card:hover {
		transform: scale(1.05);
	}
	.locked-card {
		display: flex;
		flex-direction: column;
		align-items: center;
		text-decoration: none;
		padding: 1rem;
		border-radius: 8px;
		box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
		background: rgba(109, 109, 109, 0.5);
		cursor: default;
	}
	.card-img {
		width: 100%;
		max-height: 150px;
		object-fit: cover;
		border-radius: 8px;
	}
	.card-desc {
		margin-top: 0.5rem;
		text-align: center;
		color: #333;
	}
</style>
