<script lang="ts">
	import { onMount, createEventDispatcher } from 'svelte';

	const scriptUrl = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
	let daumRef: any = null;
	let defaultQuery: any = null;
	let autoClose = false;

	const dispatch = createEventDispatcher();
	/*
        ◎ on:complete - 우편번호 검색 후 선택한 주소를 받아올 콜백함수입니다.
        ◎ on:search - 주소를 검색할 경우 실행되는 콜백함수입니다.
        ◎ on:error - 스크립트 불러오기 실패할 경우 실행되는 콜백함수입니다.

        ◎ width - width 값입니다.
        ◎ height - height 값입니다.

        ◎ autoClose - 우편번호 검색이 끝났을 때 컴포넌트를 자동으로 닫습니다. 기본값: false
        ◎ autoResize - 우편번호를 검색할 때 검색 결과에 따라 컴포넌트의 세로 길이를 자동으로 조절합니다. 기본값: false
        ◎ animation - 우편번호를 검색할 때 애니메이션 효과를 줍니다. 기본값: false
        ◎ defaultQuery - 우편번호 검색창에 미리 표시할 검색어입니다. 기본값: null
        ◎ theme - Daum 우편번호 검색 모듈에 적용할 테마입니다. 기본값: null
        ◎ style - 우편번호 검색창을 감싸는 최상위 컴포넌트에 적용할 스타일입니다. 기본값: null ex) style="border: 1px solid #ffffff"
        ◎ scriptUrl - 컴포넌트에서 사용할 Daum 우편번호 스크립트 주소입니다. 기본값: 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js'
        ◎ errorMessage - Daum 우편번호 스크립트가 로드되지 않을 때 나타낼 에러 메시지입니다. 기본값: <p>현재 Daum 우편번호 서비스를 이용할 수 없습니다. 잠시 후 다시 시도해주세요.</p>
        ◎ Daum 우편번호 생성자 속성들을 동일한 이름의 props로 전달할 수 있습니다.
    */

	onMount(() => {
		const scriptId = 'daum_postcode';
		const isExist = !!document.getElementById(scriptId);
		if (!isExist) {
			const script = document.createElement('script');
			script.src = scriptUrl;
			script.onload = () => onLoad();
			// script.onerror = (error) => onError(error);
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
				// oncomplete: onComplete,
				// onsearch: onSearch,
				// onresize: onResize,
				alwaysShowEngAddr: false,
				animation: false,
				autoMapping: false,
				autoResize: false,
				height: '400px',
				hideEngBtn: false,
				hideMapBtn: false,
				maxSuggestItems: 10,
				pleaseReadGuide: 0,
				pleaseReadGuideTimer: 1.5,
				shorthand: true,
				showMoreHName: false,
				submitMode: true,
				theme: null,
				useSuggest: true,
				useBannerLink: true,
				width: '100%',
				focusInput: true,
				focusContent: true
			});
			postCode.embed(daumRef, { q: defaultQuery, autoClose: autoClose });
		});
	};

	// const onError = (/** @type {string | boolean | Event} */ error) => {
	// 	// @ts-ignore
	// 	error.target.remove();
	// 	error = true;
	// 	dispatch('error');
	// };

	// const onComplete = (/** @type {any} */ data) => {
	// 	dispatch('complete', { data });
	// };

	// const onSearch = (/** @type {any} */ data) => {
	// 	dispatch('search', { data });
	// };

	// const onResize = (/** @type {{ height: string; }} */ size) => {
	// 	if (autoResize) {
	// 		height = size.height;
	// 	}
	// };
</script>

<h1 class="text-4xl">PostCode</h1>
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
