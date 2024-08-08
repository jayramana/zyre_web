/** @type {import('tailwindcss').Config} */
const darkMode = ["class"];
const content = [
  './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',
];
const theme = {
  extend: {
    fontFamily: {
      zyre: ["zyrefont", "sans-serif"],
    },
  },
};
const plugins = [];

export { darkMode, content, theme, plugins };
