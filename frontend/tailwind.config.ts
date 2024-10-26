// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundDark: "var(--backgroundDark)", // Updated to match globals.css
        cardBackground: "var(--cardBackground)", // Using cardBackground for elements like muted buttons
        borderGray: "var(--borderGray)",
        primaryText: "var(--primaryText)",
        secondaryText: "var(--secondaryText)",
        buttonPrimary: "var(--buttonPrimary)",
        buttonHover: "var(--buttonHover)",
      },
      boxShadow: {
        subtle: "0px 0px 10px rgba(255, 255, 255, 0.1)", /* Soft glow for muted effect */
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        monochrome: "linear-gradient(135deg, var(--backgroundDark), var(--cardBackground))", /* Updated gradient */
      },
    },
  },
  plugins: [],
};
export default config;
