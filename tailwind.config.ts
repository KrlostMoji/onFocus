import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      dropShadow: {
        '1': '0 0 5px rgba(0, 0, 255, 1)',
        '2': '0 0 20px rgba(255, 255, 255, 1)',
      }
    },
  },
  plugins: []
};
export default config;
