export type Tcontact = {
	id: string;
	name: string;
	email: string;
	gender: string;
	birth: string;
	job: string;
	phone: string;
	region: string;
};

export type TProduct = {
	id: number;
	title: string;
	description: string;
	price: number;
	discountPercentage: number;
	rating: number;
	stock: number;
	brand: string;
	category: string;
	thumbnail: string;
	images: string[5];
};

export const one = [
	{ k: '02', v: '서울특별시' },
	{ k: '031', v: '경기도' },
	{ k: '032', v: '인천광역시' },
	{ k: '033', v: '강원특별자치도' },
	{ k: '041', v: '충청남도' },
	{ k: '042', v: '대전광역시' },
	{ k: '043', v: '충청북도' },
	{ k: '044', v: '세종특별자치시' },
	{ k: '051', v: '부산광역시' },
	{ k: '052', v: '울산광역시' },
	{ k: '053', v: '대구광역시' },
	{ k: '054', v: '경상북도' },
	{ k: '055', v: '경상남도' },
	{ k: '061', v: '전라남도' },
	{ k: '062', v: '광주광역시' },
	{ k: '063', v: '전라북도' },
	{ k: '064', v: '제주특별자치도' }
];
