import { Configuration, OpenAIApi } from 'openai';
import type { CreateImageRequest, CreateCompletionRequest } from 'openai';

const config = new Configuration({
	apiKey: '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'
})
const openAI = new OpenAIApi(config);

export const generateImage = async (command: string) => {
	const request = {
		prompt: command,
		size: '256x256',
		response_format: 'b64_json'
	} as CreateImageRequest
	return await openAI.createImage(request)
}

export const generateQuote = async (command: string) => {
	const request = {
		model: 'text-davinci-002',
		prompt: command,
		temperature: 0.9,
		max_tokens: 150,
		top_p: 1,
		frequency_penalty: 0,
		presence_penalty: 0.9,
		stop: ['Human:', 'AI:']
	} as CreateCompletionRequest;
	return await openAI.createCompletion(request)
}