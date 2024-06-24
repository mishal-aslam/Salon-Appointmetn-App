/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: '#F8F8F8',
        primary: '#FEF5E3',
        secondary: '#351120',
        danger: '#F6E9CE',
        secondaryDark: '#2c0e12', // Renamed to remove dash
      },
    },
  },
  plugins: [],
};
