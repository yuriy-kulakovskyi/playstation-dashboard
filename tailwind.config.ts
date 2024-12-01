import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'theme': "rgb(9, 8, 14)",
        'primary': "rgb(17, 18, 26)",
        'indicator': "#A8F63C",
        'start-gradient': "#35AAFF",
        'end-gradient': "#194BFB",
      },
      backgroundImage: {
        'hero': "url('/images/hero.png')",
      }
    },
  },
  plugins: [],
} satisfies Config;
