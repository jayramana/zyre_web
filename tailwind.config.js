/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  './pages/**/*.{js,jsx}',
  './components/**/*.{js,jsx}',
  './app/**/*.{js,jsx}',
  './src/**/*.{js,jsx}',
];
export const theme = {
  extend: {
    fontFamily: {
      zyre: ["zyrefont", "sans-serif"],
    },
  },
};
export const plugins = [];
