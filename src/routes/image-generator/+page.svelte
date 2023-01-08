<script>
	import ImageCollection from '$lib/ImageCollection.svelte';
	import ImageGenerator from '$lib/ImageGenerator.svelte';
</script>

<ImageGenerator />
<div class="mt-40">
	<div class="border-solid border-black border-b-2 font-semibold text-2xl mb-8">
		Image Collection
	</div>
	<ImageCollection />
</div>
