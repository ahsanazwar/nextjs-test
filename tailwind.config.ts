import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["inter"],
      playfair: ["playfair-display"],
    },
    colors: {
      'white': '#ffffff',
      'black': '#000000',
      'golden': '#AD8749',
    },
    extend: {
      backgroundImage: {
        'goldenGradient': 'linear-gradient(180deg, #AD8749, #DCBB75)',
        'greenTheme': 'linear-gradient(to right, #283606 , #0F1500)'
      }
    },
  },
  plugins: [],
};
export default config;
