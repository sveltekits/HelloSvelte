import { fail, error, redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';

export const load = (async (loadServerEvent) => {
	const { fetch, params, url, route } = loadServerEvent;
	const { productId } = params;

	// console.log('url ', url);
	// console.log('route id :: ', route.id);
	/*
		url  URL {
			href: 'http://localhost:5173/shop/21',
			origin: 'http://localhost:5173',
			protocol: 'http:',
			username: '',
			password: '',
			host: 'localhost:5173',
			hostname: 'localhost',
			port: '5173',
			pathname: '/shop/21',
			search: '',
			searchParams: URLSearchParams {},
			hash: ''
		}

		route id ::  /shop/[productId]
	*/

	if (Number(productId) > 30) {
		// throw error(404, '상품을 찾을 수 없습니다.');
		throw redirect(307, '/shop');
	}

	try {
		const response = await fetch(`https://dummyjson.com/products/${productId}`);
		const data = await response.json();

		return data;
	} catch (e) {
		throw error(404, (e as Error).message);
	}
}) satisfies PageServerLoad;
