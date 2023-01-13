import { getAllImages, saveImage } from '$lib/server/Supabase.server';
import { generateImage } from '$lib/server/OpenAI.server';
import { error, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async () => {
	try {
		const { data: { data: [{ b64_json: base64 }] } } = await generateImage('portrait art from realistic painterly "grim dark" "medival"');
		if (base64) {
			await saveImage(base64)
		}
		return new Response(String(base64));
	} catch (errorMessage) {
		console.log(errorMessage)
		throw error(500, 'Error')
	}
}

export const GET: RequestHandler = async () => {
	try {
		const data = await getAllImages();
		return new Response(String(JSON.stringify(data)));
	} catch (errorMessage) {
		console.log(errorMessage)
		throw error(500, 'Error')
	}
}