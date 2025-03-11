<script lang="ts">
	import { onMount } from 'svelte';
	import * as prism from 'prismjs';

	export let codeClass: string = '';
	export let codeContent: string = '';

	onMount(() => {
		prism.highlightAll();
	});
</script>

<pre>
	<code class={codeClass}>
		{codeContent}
	</code>
</pre>

<style>
	pre {
		background: #2d2d2d;
		color: #ccc;
		padding: 1rem;
		border-radius: 8px;
		overflow-x: auto;
		text-align: start;
		width: 100%;
	}
	
	code {
		width: 50vw;
		min-width: 300px;
		font-family: monospace;
	}
</style>
