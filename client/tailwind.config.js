/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-white": "#E6E6E6",
        "nav-primary": "#0F1111",
        "nav-secondary": "#232f3e",
        "text-deal": "#CC0C39",
      },
    },
  },
  plugins: [],
};
