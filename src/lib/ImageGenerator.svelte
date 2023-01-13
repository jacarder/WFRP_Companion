<script lang="ts">
	import { imageCollection } from '../stores';

	let response: Promise<string>;
	const generateImage = async () => {
		response = fetch('/api/generate/image', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			}
		})
			.then((r) => r.text())
			.then((base64) => {
				imageCollection.update((data) => [{ base64 }, ...data]);
				return base64;
			});
	};
</script>

<button on:click={generateImage}>Generate</button>
<div>
	{#await response}
		Image is loading!
	{:then responseData}
		{#if responseData}
			<img src={`data:image/png;base64,${responseData}`} alt="ey" />
		{:else}
			Image could not be found
		{/if}
	{/await}
</div>
