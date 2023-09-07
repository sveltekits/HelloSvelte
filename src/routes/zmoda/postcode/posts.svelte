<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';
	console.log('dfdsfsdfsdfsdfsadfasdfsdfsdf');

	let height: string = '500px';
	let width: string = '350px';
	let scriptUrl: string = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
	let errorMessage: string =
		'<p>현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.</p>';

	let alwaysShowEngAddr: boolean = false;
	let animation: boolean = false;
	let autoClose: boolean = false;
	let autoMapping: boolean = true;
	let autoResize: boolean = false;

	let defaultQuery: any = null;

	let hideEngBtn: boolean = false;
	let hideMapBtn: boolean = false;
	let maxSuggestItems: number = 10;
	let pleaseReadGuide: number = 0;
	let pleaseReadGuideTimer: number = 1.5;

	let shorthand: boolean = true;
	let showMoreHName: boolean = false;
	let style: string = '';
	let submitMode: boolean = true;

	let theme: any = null;
	let useSuggest: boolean = true;
	let useBannerLink: boolean = true;

	let focusInput: boolean = true;
	let focusContent: boolean = true;

	let display: string = 'block';
	let error: boolean = false;

	$: daumWidth = width;
	$: daumHeight = height;

	let daumRef: any = null;

	const dispatch = createEventDispatcher();

	onMount(() => {
		const scriptId = 'daum_postcode';
		const isExist = !!document.getElementById(scriptId);
		if (!isExist) {
			const script = document.createElement('script');
			script.src = scriptUrl;
			console.log('scriptUrl --> ', scriptUrl);
			script.onload = () => onLoad();
			script.onerror = (error) => onError(error);
			script.id = scriptId;
			document.body.appendChild(script);
		} else {
			onLoad();
		}
	});

	const onLoad = () => {
		// @ts-ignore
		window.daum.postcode.load(() => {
			// @ts-ignore
			const postCode = new window.daum.Postcode({
				oncomplete: onComplete,
				onsearch: onSearch,
				onresize: onResize,
				alwaysShowEngAddr,
				animation,
				autoMapping,
				autoResize,
				height: '100%',
				hideEngBtn,
				hideMapBtn,
				maxSuggestItems,
				pleaseReadGuide,
				pleaseReadGuideTimer,
				shorthand,
				showMoreHName,
				submitMode,
				theme,
				useSuggest,
				useBannerLink,
				width: '100%',
				focusInput,
				focusContent
			});
			postCode.embed(daumRef, { q: defaultQuery, autoClose: autoClose });
		});
	};

	const onError = (error: any) => {
		error.target.remove();
		error = true;
		dispatch('error');
	};

	const onComplete = (data: any) => {
		dispatch('complete', { data });
	};

	const onSearch = (data: any) => {
		dispatch('search', { data });
	};

	const onResize = (size: any) => {
		if (autoResize) {
			height = size.height;
		}
	};
</script>

<div
	bind:this={daumRef}
	style={`
        display: ${display};
        width: ${daumWidth};
        height: ${daumHeight};
        ${style}
    `}
>
	{#if error}
		{@html errorMessage}
	{/if}
</div>
