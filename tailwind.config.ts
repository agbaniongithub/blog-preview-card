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
        white: {
          1: "hsl(0, 0%, 100%)"
        },
        gray: {
          1:"hsl(0, 0%, 50%)"
        },
        black: {
          1:"hsl(0, 0%, 7%)"
        },
        yellow: {
          1: "hsl(47, 88%, 63%)"
        }
      },
      fontFamily: {
        figtree: ['var(--font-figtree)'],
      }
    },
  },
  plugins: [],
};
export default config;
