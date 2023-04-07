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
				'btn-primary': '#FFCC01',
				'theme-accent-1': '#F16363',
				'theme-accent-2': '#5B390C',
				'theme-accent-3': 'rgb(103,103,226)',
				'theme-accent-4': '#EAA33B'
			}
		}
	},
	daisyui: {
		logs: false,
		prefix: '',
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
	plugins: [require('@tailwindcss/typography'), require('daisyui')]
};
