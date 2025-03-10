/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Make sure all your files are included
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", // Custom primary color
        secondary: "#9333EA", // Custom secondary color
        danger: "#DC2626", // Custom danger color
      },
    },
  },
  plugins: [],
};
