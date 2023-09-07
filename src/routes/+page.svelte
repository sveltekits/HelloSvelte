<script lang="ts">
	import MainPageNav from '$lib/components/MainPageNav.svelte';
	import Search from '$lib/components/Search.svelte';
</script>

<div class="mb-10">
	<MainPageNav />
</div>

<div
	class="mt-20 h-[400px] bg-no-repeat bg-center relative"
	style="background-image: url(/img/logo_bg-1280_01.png)"
>
	<div class="absolute mt-4 w-full">
		<Search />
	</div>
</div>
