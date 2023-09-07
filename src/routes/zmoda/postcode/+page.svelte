<script lang="ts">
	import DaumPostcode from './posts.svelte';

	const handleComplete = ({ detail: { data } }: any) => {
		let fullAddress = data.address;
		let jibunAddress = data.jibunAddress;

		console.log(fullAddress); // 서울 구로구 개봉로20길
		console.log(jibunAddress); // 서울 구로구 개봉동
	};
</script>

<DaumPostcode on:complete={handleComplete} />
