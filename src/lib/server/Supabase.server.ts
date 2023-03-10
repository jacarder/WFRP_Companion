import { createClient } from '@supabase/supabase-js'
import type { Database } from 'src/models/Database'

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>('https://hjebocktvuzvtvubpajy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhqZWJvY2t0dnV6dnR2dWJwYWp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzMxNDczNDcsImV4cCI6MTk4ODcyMzM0N30.06HpZLhKp5PsXbGdrrY2PwWWbKobucJdpBwmmFMDm6g')

export const saveImage = async (base64: string) => {
	await supabase.from('openai_images').insert({
		base64
	})
}
export const saveQuote = async (quote: string) => {
	await supabase.from('openai_quotes').insert({
		quote
	})
}
export const getAllImages = async () => (await supabase.from('openai_images').select('base64')).data;
export const getAllQuotes = async () => (await supabase.from('openai_quotes').select('quote')).data;
export const getRandomQuote = async () => (await supabase.from('random_quotes').select('quote').limit(1).single()).data?.quote;
export const getRandomNPC = async () => (await supabase.from('random_npc').select().limit(1).single()).data;