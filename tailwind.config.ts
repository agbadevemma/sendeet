import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      filter: {
        "blur-sm": "blur(4px)",
        "blur-md": "blur(8px)",
        "blur-lg": "blur(12px)",
        "blur-xl": "blur(20px)"
      },
      fontSize: {
        // text font sizes
        "xs": ["0.75rem", { lineHeight: "1.125rem" }],
        "sm": ["0.875rem", { lineHeight: "1.25rem" }],
        "md": ["1rem", { lineHeight: "1.5rem" }],
        "lg": ["1.125rem", { lineHeight: "1.75rem" }],
        "xl": ["1.25rem", { lineHeight: "1.875rem" }],
        // displays font sizes
        "display-xs": ["1.5rem", { lineHeight: "2rem" }],
        "display-sm": ["1.875rem", { lineHeight: "2.375rem" }],
        "display-md": [
          "2.25rem",
          { lineHeight: "2.75rem", letterSpacing: "-0.02em" },
        ],
        "display-lg": [
          "3rem",
          { lineHeight: "3.75rem", letterSpacing: "-0.02em" },
        ],
        "display-xl": [
          "3.75rem",
          { lineHeight: "4.625rem", letterSpacing: "-0.02em" },
        ],
        "display-2xl": [
          "4.5rem",
          { lineHeight: "5.625rem", letterSpacing: "-0.02em" },
        ],
      },
      boxShadow: {
        xs: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        sm: "0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)",
        md: "0px 4px 8px -2px rgba(16, 24, 40, 0.10), 0px 2px 4px -2px rgba(16, 24, 40, 0.06)",
        DEFAULT: "0px 1px 2px 0px rgba(16, 24, 40, 0.05)",
        lg: "0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)",
        xl: "0px 20px 24px -4px rgba(16, 24, 40, 0.08), 0px 8px 8px -4px rgba(16, 24, 40, 0.03)",
        "2xl": "0px 24px 48px -12px rgba(16, 24, 40, 0.18)",
        "3xl": "0px 32px 64px -12px rgba(16, 24, 40, 0.14)",
      },
      colors: {
        "blur-dark": "rgba(52, 64, 84, 0.60)",
        "blur-light": "rgba(255, 255, 255, 0.60)",
        error: {
          50: "#FFCCCB",
          100: "#F2BCBA",
          200: "#EB9B98",
          300: "#E26E6A",
          400: "#DD514D",
          500: "#D42620",
          600: "#C1231D",
          700: "#971B17",
          800: "#751512",
          900: "#59100D",
        },
        primary: {
          50: "#E6F7FE",
          100: "#B0E5FD",
          200: "#8AD8FB",
          300: "#54C6FA",
          400: "#33BBF9",
          500: "#00AAF7",
          600: "#009BE1",
          700: "#0079AF",
          800: "#005E88",
          900: "#004768",
        },
        secondary: {
          50: "#E6FDF9",
          100: "#B0F8ED",
          200: "#8AF5E4",
          300: "#54F0D7",
          400: "#33EDD0",
          500: "#00E9C4",
          600: "#00D4B2",
          700: "#00A58B",
          800: "#00806C",
          900: "#006252",
        },
        success: {
          50: "#E7F5EC",
          100: "#B5DFC3",
          200: "#91CFA6",
          300: "#5EB97D",
          400: "#3FAC64",
          500: "#0F973D",
          600: "#0E8938",
          700: "#0B6B2B",
          800: "#085322",
          900: "#063F1A",
        },
        warning: {
          50: "#FEF6E8",
          100: "#F9D495",
          200: "#F9D495",
          300: "#F7C164",
          400: "#F5B546",
          500: "#F3A218",
          600: "#DD9316",
          700: "#AD7311",
          800: "#86590D",
          900: "#66440A",
        },
        grey: {
          50: "#F0F1F3",
          100: "#D0D3D9",
          200: "#B9BDC7",
          300: "#989FAD",
          400: "#858D9D",
          500: "#667085",
          600: "#5D6679",
          700: "#48505E",
          800: "#383E49",
          900: "#101928",
        },
        brown: {
          50: "#FEF6E8",
          100: "#F9D495",
          200: "#F9D495",
          300: "#F7C164",
          400: "#F5B546",
          500: "#F3A218",
          600: "#DD9316",
          700: "#AD7311",
          800: "#86590D",
          900: "#66440A",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      // only generate global styles
      strategy: "class", // only generate classes
    }),
  ],
};
export default config;
