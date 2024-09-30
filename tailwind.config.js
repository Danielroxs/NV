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
        "soft-gray": "#F8F9FA ",
        "soft-blue": "#E9ECEF",
        "medium-blue": "#DEE2E6",
        "soft-navy": "#CED4DA",
        "gray-1": "#ADB5BD",

        "gray-2": "#6C757D",
        "gray-3": "#495057",
        "gray-4": "#343A40",
        "gray-5": "#212529",

      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
