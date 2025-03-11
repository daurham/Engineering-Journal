<script lang="ts">
  import { onMount } from "svelte";
  /*@ts-ignore*/
  import * as prism from 'prismjs';
  import "prismjs/themes/prism-tomorrow.css"; // Choose a theme
  import "prismjs/components/prism-javascript"; // Load the language support you need
  import "prismjs/components/prism-java";

  const screenConfiguration = {
    title: "Linked Lists",
    subtitle: "",
    img: "",
    description: "A linked list is a linear data structure where elements are stored in nodes linked via pointers. Unlike arrays, linked lists allow dynamic memory allocation and efficient insertions/deletions.",
  };

  onMount(() => {
    prism.highlightAll();
  });
</script>

<div class="page">
  <h1>{screenConfiguration.title}</h1>
  <h2>{screenConfiguration.subtitle}</h2>
  {#if screenConfiguration.img}
    <img src={screenConfiguration.img} alt="{screenConfiguration.title}" class="img" />
  {/if}
  <pre><code class="language-javascript">{`
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
  `}</code></pre>
  <p>{screenConfiguration.description}</p>
</div>

<style>
  .page {
    max-width: 800px;
    margin: auto;
    padding: 2rem;
    text-align: center;
  }
  .img {
    width: 100%;
    max-height: 300px;
    object-fit: contain;
    margin-bottom: 1rem;
  }
  pre {
    background: #2d2d2d;
    color: #ccc;
    padding: 1rem;
    border-radius: 8px;
    overflow-x: auto;
    text-align: start;
  }
</style>
