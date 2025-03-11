<script lang="ts">
	import * as prism from 'prismjs';
	import 'prismjs/themes/prism-tomorrow.css'; // Choose a theme
	import { onMount } from 'svelte';
	import { CodeContent } from '$lib';

	export let codeSnippets: { tabName: string; code: string; language: string }[] = [];

	let selectedTabIndex = 0;

	$: currentSnippet = codeSnippets[selectedTabIndex];
	$: codeClass = `language-${currentSnippet?.language}`;
	$: codeContent = currentSnippet?.code;

	function selectTab(index: number) {
		selectedTabIndex = index;
	}

	onMount(() => {
		prism.highlightAll();
	});
</script>

{#if codeSnippets.length > 0}
	<div class="codeblock-container">
		{#if codeSnippets.length === 1}
			<CodeContent {codeClass} {codeContent} />
		{:else if codeSnippets.length > 1}
			<div class="tabs">
				{#each codeSnippets as snippet, index}
					<!-- svelte-ignore a11y_click_events_have_key_events -->
					<!-- svelte-ignore a11y_no_static_element_interactions -->
					<div
						class="tab {selectedTabIndex === index ? 'active' : ''}"
						on:click={() => selectTab(index)}
					>
						{snippet.tabName}
					</div>
				{/each}
			</div>

			{#key selectedTabIndex}
				<CodeContent {codeClass} {codeContent} />
			{/key}
		{/if}
	</div>
{/if}

<style>
	.codeblock-container {
		width: 100%;
	}

	.tabs {
		width: 100%;
		display: flex;
		border-bottom: 1px solid #ccc;
		margin-bottom: 10px;
		justify-content: end;
	}

	.tab {
		padding: 10px 20px;
		cursor: pointer;
		border: 1px solid transparent;
		border-bottom: none;
		margin-bottom: -1px;
	}

	.tab.active {
		border-color: #ccc;
		border-bottom-color: white;
	}

	.tab:hover {
		background-color: #f0f0f0;
	}
</style>
