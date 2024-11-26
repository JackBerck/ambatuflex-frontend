/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      container: {
        center: true,
      },
      colors: {
        "blue-base": "#1a73e8",
        "dark-base": "#111827",
        "light-base": "#f9fafb",
		"purple-base": "#7c3aed",
      },
      fontFamily: {
        poppins: "Poppins",
      },
    },
  },
  plugins: [],
};
