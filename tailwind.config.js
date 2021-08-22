module.exports = {
	mode: "jit",
	purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			transitionProperty: {
				height: "height",
			},
		},
	},
	variants: {
		accessibility: ["responsive", "hover", "focus", "active", "group-hover"],
		backgroundColor: ["responsive", "hover", "focus", "active"],
		extend: {},
	},
	plugins: [],
};
