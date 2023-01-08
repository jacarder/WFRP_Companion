import { writable } from 'svelte/store';
import type { ImageResponse } from './models/Image';

export const imageCollection = writable<ImageResponse[]>([]);