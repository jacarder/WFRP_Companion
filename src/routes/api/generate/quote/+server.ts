import { getAllImages, saveQuote } from '$lib/server/Supabase.server';
import { generateQuote } from '$lib/server/OpenAI.server';
import { error, type RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async () => {
	try {
		const { data: { choices: choiceData } } = await generateQuote('NPC quote in quotation marks from peasants of the world of "Warhammer fantasy rpg"');
		const quote = choiceData[0].text;
		if (quote) {
			await saveQuote(quote)
		}
		return new Response(String(quote));
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