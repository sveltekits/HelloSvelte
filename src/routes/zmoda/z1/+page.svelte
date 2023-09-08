<script lang="ts">
	import { stringify } from 'postcss';

	let select_id: string = '0';
	let food_child: { v: string; t: string }[];

	const food_parent = [
		{ v: '0', t: '음식 선택' },
		{ v: '1', t: '중식' },
		{ v: '2', t: '한식' },
		{ v: '3', t: '양식' }
	];
	const food_child_0 = [{ v: '00', t: '메뉴' }];
	const food_child_1 = [
		{ v: '11', t: '자장면' },
		{ v: '12', t: '짬뽕' },
		{ v: '13', t: '탕수육' }
	];
	const food_child_2 = [
		{ v: '21', t: '육게장' },
		{ v: '22', t: '돼지국밥' },
		{ v: '23', t: '잡체' }
	];
	const food_child_3 = [
		{ v: '31', t: '돈가스' },
		{ v: '32', t: '스테이크' },
		{ v: '33', t: '오무라이스' }
	];
</script>

<select bind:value={select_id}>
	{#each food_parent as item}
		<option value={item.v}>{item.t}</option>
	{/each}
</select>

<select>
	{#if select_id === '0'}
		{#each food_child_0 as item}
			<option value={item.v}>{item.t}</option>
		{/each}
	{:else if select_id === '1'}
		{#each food_child_2 as item}
			<option value={item.v}>{item.t}</option>
		{/each}
	{:else if select_id === '2'}
		{#each food_child_2 as item}
			<option value={item.v}>{item.t}</option>
		{/each}
	{:else if select_id === '3'}
		{#each food_child_3 as item}
			<option value={item.v}>{item.t}</option>
		{/each}
	{/if}
</select>
