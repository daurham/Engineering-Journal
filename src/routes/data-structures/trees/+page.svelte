<script lang="ts">
	import { CodeBlock } from '$lib';

	const screenConfiguration = {
		title: 'Trees',
		subtitle: 'What is it and when to use it.',
		// img: '.././linked-list.png', // <- Example
		img: '',
		description: 'A Tree is..'
	};

	const codeSnippets = [
		{
			tabName: 'PseudoClassical (JS)',
			language: 'javascript',
			code: `
const TreeNode = function(data) {
  this.value = data.value;
  this.children = data.children | null;
};

const Tree = function(data) {
  this.head = null;
  this.length = 0;

  if (data !== undefined) {
    this.head = new Node(data);
    this.length = 1;
  }
};

Tree.prototype.addChildren = function(arrayOfValues) {...}
`
		},
		{
			tabName: 'Classical (JS)',
			language: 'javascript',
			code: `
class TreeNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Tree {
  constructor() {
    this.head = null;
  }

  append(value) {
    if (!this.head) {
      this.head = new Node(value);
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = new Node(value);
  }
}
`
		}
	];

		const codeSnippets2 = [
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
	
	<p>{screenConfiguration.description}</p>
	<CodeBlock {codeSnippets} />
	
	<CodeBlock codeSnippets={codeSnippets2} />
</div>
