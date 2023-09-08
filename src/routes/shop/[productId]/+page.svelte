<script lang="ts">
	import { goto, invalidateAll, preloadData, preloadCode } from '$app/navigation';
	import type { PageServerData } from './$types';
	import type { TProduct } from '$lib/types/type';

	export let data: TProduct;

	const refresh = (): void => {
		// invalidate($page.url.href);
		invalidateAll();
	};
</script>

<svelte:head>
	<!-- <title>{$page.data.post?.title}</title> -->
	<title>Product Detail</title>
</svelte:head>

<div>
	<h1>제품명 : {data.title}</h1>
	<h2>가격 : {data.price}</h2>
	<h2>Rating : {data.rating.toFixed(2)}</h2>
	<h2>설명 : {data.description}</h2>
</div>

<button
	class="my-5 bg-pink-300 hover:bg-pink-700 p-3 rounded-xl"
	on:focus={async () => {
		await preloadData('/shop');
	}}
	on:mousedown={async () => {
		await preloadCode('/shop');
	}}
	on:click={() => {
		goto('/shop');
	}}>뒤로 가기</button
>
<button class="my-5 bg-pink-300 hover:bg-pink-700 p-3 rounded-xl" on:click={refresh}
	>다시읽기</button
>
