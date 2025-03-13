<script lang="ts">
	import { CodeBlock } from '$lib';
	
	const screenConfiguration = {
		title: 'Binary Search',
		subtitle: 'What is it and when to use it.',
		// img: '.././linked-list.png',
		img: '',
		description:
			'Binary search function efficiently finds a target in a sorted array using a divide-and-conquer approach.'
	};

		const codeSnippets = [
	  { tabName: 'Javascript', language: 'javascript', code:
`
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found, return its index
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }
    
    return -1; // Target not found
}

// Example usage
const numbers = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(numbers, 7)); // Output: 3
console.log(binarySearch(numbers, 2)); // Output: -1

`
		 },
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