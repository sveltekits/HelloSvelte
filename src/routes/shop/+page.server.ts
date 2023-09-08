import { fail, error, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load = (async (loadServerEvent) => {
	const { fetch, url } = loadServerEvent;

	const limit = Number(url.searchParams.get('limit') ?? 30);
	const order = url.searchParams.get('order') ?? 'asc';

	const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);

	try {
		// http://localhost:5173/shop?limit=5&order=asc
		const response = await fetch(`https://dummyjson.com/products?limit=${limit}`);
		/*
			const posts = await prisma.post.findMany({
				orderBy: { id: 'asc' },
				take: limit // Math.round(Math.random() * 30)
			});

			loadServerEvent.setHeaders({
				// 위에 생성된 출력 갯수를, 초기화 시키는 시간을 지정
				'Cache-Control': 'max-age=60'
				// 'Cache-Control': 'public, max-age=0, s-maxage=60'
			});
		*/
		const data = await response.json();

		return data;
	} catch (e) {
		throw error(404, (e as Error).message);
	}
}) satisfies PageServerLoad;
