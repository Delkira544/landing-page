/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "hsl(222.2 84% 4.9%)",
          foreground: "hsl(210 40% 98%)",
        },
        secondary: {
          DEFAULT: "hsl(210 40% 96%)",
          foreground: "hsl(222.2 84% 4.9%)",
        },
        slate: {
          950: "hsl(200 9% 7%)",
          400: "hsl(200 6% 48%)",
          300: "hsl(200 6% 59%)",
        },
      },
    },
  },
  plugins: [],
};
