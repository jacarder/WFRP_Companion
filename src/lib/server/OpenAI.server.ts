import { Configuration, OpenAIApi } from 'openai';
import type { CreateImageRequest } from 'openai';

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