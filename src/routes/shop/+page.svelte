<script lang="ts">
	import type { PageServerData } from './$types';
	import Card from '$lib/components/Card.svelte';
	export let data: PageServerData;
</script>

<svelte:head>
	<title>즐거운 쇼핑</title>
</svelte:head>

<h1 class="text-4xl my-5">List of Goods</h1>
<div class="px-4 grid gap-4 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-1">
	{#each data.products as product}
		<Card {product} />
	{/each}
</div>
