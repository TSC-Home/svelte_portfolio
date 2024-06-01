import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { html as toReactNode } from 'satori-html';

import { read } from '$app/server';
import chivoLightTTF from '$lib/fonts/Chivo-Light.ttf';
import chivoTTF from '$lib/fonts/Chivo.ttf';
const fontData400 = read(chivoLightTTF).arrayBuffer();
const fontData700 = read(chivoTTF).arrayBuffer();

export async function componentToPng(component: any, props: any, height: any, width: any) {
	const result = component.render(props);
	const markup = toReactNode(`${result.html}<style>${result.css.code}</style>`);
	const svg = await satori(markup, {
		fonts: [
			{
				name: 'chivoLightTTF',
				data: await fontData400,
				style: 'normal',
				weight: 400
			},
			{
				name: 'chivoTTF',
				data: await fontData700,
				style: 'normal',
				weight: 700
			}
		],
		height: +height,
		width: +width
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: +width
		}
	});

	const png = resvg.render();

	return new Response(png.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
}
