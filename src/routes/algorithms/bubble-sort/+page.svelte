<script lang="ts">
	import { CodeBlock } from '$lib';
	
	const screenConfiguration = {
		title: 'Bubble Sort\
		',
		subtitle: 'What is it and when to use it.',
		// img: '.././linked-list.png',
		img: '',
		description:
			'A Bubble Sort algorithm is when you....'
	};

		const codeSnippets = [
	  { tabName: 'JavaScript', language: 'javascript', code: `
function bubbleSort(arr) {
    let n = arr.length;
    let swapped = true;

    while (swapped) {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]; // Swap
                swapped = true;
            }
        }
        n--; // Reduce the range of comparison
    }
    
    return arr;
}

// Example usage
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(numbers)); // Output: [11, 12, 22, 25, 34, 64, 90]
		` },
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
