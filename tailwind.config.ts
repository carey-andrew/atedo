import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "secondary-light": "#ffffff", // Background color for light mode
        "secondary-dark": "#000000", // Background color for dark mode
        "primary-light": "#000000", // Text color for light mode
        "primary-dark": "#ffffff", // Text color for dark mode
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
        bebasNeue: ["var(--font-bebasNeue)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
