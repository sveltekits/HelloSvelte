<script lang="ts">
	import type { TProduct } from '$lib/types';
	export let product: TProduct;
</script>

<div class="card hover:shadow-lg">
	<a href={`/shop/${product.id}`}>
		<img
			src={`${product.images[0]}`}
			class="h-32 sm:h-48 w-48 object-cover"
			alt={`${product.title}`}
		/>
	</a>
	<span class="text-2xl font-bold">
		<a href={`/products/${product.id}`}>{product.title}</a>
	</span>
	<span class="text-sm block text-gray-500">{product.description}</span>
	<div class="badge">
		<svg
			class="w-5 inline-block"
			fill="none"
			stroke="currentColor"
			stroke-width="1.5"
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			aria-hidden="true"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
			/>
		</svg>
		<span>{product.discountPercentage} 할인</span>
	</div>
</div>
