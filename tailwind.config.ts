import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          primary: '#FFFFFF', 
          secondary: '#007FBC', 
          tertiary: '#1B1B1B',
          hover: '#779D00',
        },
        light: {
          secondary: '#FFFFFF', 
        },
        accent: '#4ade80',
        text: {
          light: '#2d864d',
          primary: '#fcfcfb',
          secondary: '#a3a3a3',
        },
        border: '#feae01',
      },
      fontFamily: {
        'Lato': ['Lato', 'sans-serif'],
        'Barlow': ['Barlow', 'sans-serif'],
        'noto': ['Noto Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
export default config;
