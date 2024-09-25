/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#ECEEFF",
        "coral-red": "#FF6452",
        'city-lights': '#dfe4ea',
        "anti-flash-white": '#f1f2f6',
        "slate-gray": "#6D6D6D",
        "pale-blue": "#F5F6FF",
        "white-400": "rgba(255, 255, 255, 0.80)",
        "gray-blue": "#5A6F7D "
      },
    },
  },
  plugins: [],
}
