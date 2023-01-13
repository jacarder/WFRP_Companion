import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ fetch }) => {
	const npcRequest = fetch('/api/generate/npc', {
		method: 'GET',
		headers: {
			'content-type': 'application/json'
		}
	}).then((r) => r.json());
	const { quote, base64 } = await npcRequest;
	return {
		quote,
		base64
	}
};
