/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				heading: ['Montserrat', 'sans-serif'],
				body: ['Work sans', 'sans-serif']
			},
			colors: {
				'btn-primary': '#FFCC01'
			}
		}
	},
	daisyui: {
		themes: [
			{
				light: {
					...require('daisyui/src/colors/themes')['[data-theme=bumblebee]'],
					'base-100': '#fff5cf',
					'base-content': '#000'
				}
			}
		]
	},
	plugins: [require('daisyui')]
};
