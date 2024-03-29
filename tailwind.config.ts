import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				hyd: "url('/hyd.png')",
			},
			keyframes: {
				curtain: {
					"0%": { transform: "translateY(-100%)" },
					"100%": { transform: "translateY(-10%)" },
				},
			},
			animation: {
				curtain: "curtain 0.5s linear",
			},
		},
		fontFamily: {
			galgo: ["var(--galgo)"],
		},
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
