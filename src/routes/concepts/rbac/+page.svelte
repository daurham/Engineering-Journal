<script lang="ts">
	import { CodeBlock } from '$lib';
	
	const screenConfiguration = {
		title: 'RBAC',
		subtitle: 'What is it and when to use it.',
		// img: '.././linked-list.png',
		img: '',
		description:
			'Role-Based Access Control (Or RBAC) is when you....'
	};

		const codeSnippets = [
	  { tabName: 'HTML', language: 'html', code: '<div>Hello World</div>' },
	  { tabName: 'JavaScript', language: 'javascript', code: 'console.log("Hello World");' },
	  { tabName: 'CSS', language: 'css', code: 'body { background-color: #f0f0f0; }' }
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
