import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'button-skeu': '0px 1px 2px 0px rgba(16, 24, 40, 0.24), 0px 0px 0px 1px #00AAF7',
      },
      backgroundImage: {
        'button-skeu': 'linear-gradient(180deg, rgba(255, 255, 255, 0.20) 14.55%, rgba(0, 121, 175, 0.20) 100%), #00AAF7',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
