<script lang="ts">
	import { CodeBlock } from '$lib';
	
	const screenConfiguration = {
		title: 'Binary Search',
		subtitle: 'What is it and when to use it.',
		// img: '.././linked-list.png',
		img: '',
		description:
			'A binary search is when you....'
	};

		const codeSnippets = [
	  { tabName: 'HTML', language: 'html', code: '<div>Hello World</div>' },
	];

</script>

<div class="page">
	<h1>{screenConfiguration.title}</h1>
	<h3>{screenConfiguration.subtitle}</h3>

	{#if screenConfiguration.img}
		<img src={screenConfiguration.img} alt={screenConfiguration.title} class="img" />
	{/if}

	<CodeBlock {codeSnippets} />

	<p>{screenConfiguration.description}</p>
</div>