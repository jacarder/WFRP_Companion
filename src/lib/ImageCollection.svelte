<script lang="ts">
	import type { ImageResponse } from 'src/models/Image';
	import { imageCollection } from '../stores';
	let imageData: ImageResponse[];

	const getImageCollection = async () =>
		fetch('/api/image-generator', {
			method: 'GET',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((r) => r.json() as unknown as ImageResponse[])
			.then((data) => {
				imageCollection.set(data);
				return data;
			});

	imageCollection.subscribe((value) => {
		imageData = value;
	});
</script>

<div>
	{#await getImageCollection()}
		Image Collection Loading...
	{:then responseData}
		{#if imageData}
			{#each imageData as data}
				<img src={`data:image/png;base64,${data.base64}`} alt="ey" />
			{/each}
		{:else}
			Images could not be found
		{/if}
	{/await}
</div>
