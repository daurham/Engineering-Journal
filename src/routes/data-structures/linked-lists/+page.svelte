<script lang="ts">
	import { CodeBlock } from '$lib';

	const screenConfiguration = {
		title: 'Linked Lists',
		subtitle: 'What is it and when to use it.',
		img: '.././linked-list.png',
		description:
			'A linked list is a linear data structure where elements are stored in nodes linked via pointers. Unlike arrays, linked lists allow dynamic memory allocation and efficient insertions/deletions.'
	};

	const codeSnippets = [
		{
			tabName: 'PseudoClassical (JS)',
			language: 'javascript',
			code: `
const Node = function(data) {
  this.data = data;
  this.next = null;
};

const LinkedList = function(data) {
  this.head = null;
  this.length = 0;

  if (data !== undefined) {
    this.head = new Node(data);
    this.length = 1;
  }
};

LinkedList.prototype.addValues = function(arrayOfValues) {...}
`
		},
		{
			tabName: 'Classical (JS)',
			language: 'javascript',
			code: `
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
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
</script>

<div class="page">
	<h1>{screenConfiguration.title}</h1>

	<h3>{screenConfiguration.subtitle}</h3>

	{#if screenConfiguration.img}
		<img src={screenConfiguration.img} alt={screenConfiguration.title} class="img" />
	{/if}

	<p>{screenConfiguration.description}</p>

	<CodeBlock {codeSnippets} />
</div>