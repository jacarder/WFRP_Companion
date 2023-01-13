import { getRandomNPC } from '$lib/server/Supabase.server';
import { error, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async () => {
	try {
		const data = await getRandomNPC();
		return new Response(String(JSON.stringify(data)));
	} catch (errorMessage) {
		console.log(errorMessage)
		throw error(500, 'Error')
	}
}