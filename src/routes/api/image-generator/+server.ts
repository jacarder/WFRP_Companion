import { generateImage } from '../../../lib/server/OpenAI.server';
import { error } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export async function POST() {
	try {
		const image = await generateImage('witch hunter warhammer fantasy rpg portrait');
		return new Response(String(image.data.data[0].b64_json));
	} catch (errorMessage) {
		console.log(errorMessage)
		throw error(500, 'Error')
	}
}