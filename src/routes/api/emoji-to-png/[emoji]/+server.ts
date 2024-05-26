import { createCanvas } from 'canvas';
import type { RequestHandler } from '@sveltejs/kit';

// Helper function to draw emoji on canvas and return it as PNG buffer
const generateEmojiPng = (emoji: string): Buffer => {
	const canvas = createCanvas(256, 256);
	const context = canvas.getContext('2d');

	// Set the font size and draw the emoji
	context.font = '100px serif';
	context.fillText(emoji, 14, 100);

	// Return the PNG buffer
	return canvas.toBuffer('image/png');
};

// SvelteKit endpoint to handle GET requests
export const GET: RequestHandler = async ({ params }) => {
	const { emoji } = params as { emoji: string };

	// Generate the PNG buffer
	const pngBuffer = generateEmojiPng(emoji);

	// Create a sanitized filename by removing or replacing non-ASCII characters
	const sanitizedFilename = 'emoji.png';

	// Return the PNG buffer as a response
	return new Response(pngBuffer, {
		headers: {
			'Content-Type': 'image/png',
			'Content-Disposition': `attachment; filename="${sanitizedFilename}"`
		}
	});
};
