<script lang="ts">
	let response: Promise<string>;
	const generateImage = async () => {
		response = fetch('/api/generate/quote', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			}
		}).then((r) => r.text());
		//.then((quote) => quote);
	};
</script>

<button on:click={generateImage}>Generate</button>
<div>
	{#await response}
		Quote is generating!
	{:then responseData}
		{#if responseData}
			{responseData}
		{:else}
			Quote could not be generated
		{/if}
	{/await}
</div>
