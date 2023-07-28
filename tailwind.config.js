/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage: {
        circularLight: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #fff7ed 5px, #fff7ed 100px)',
        circularDark: 'repeating-radial-gradient(rgba(255,247,237,0.4) 2px, #082f49 5px, #082f49 100px)',
        circularLightLg: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #fff7ed 5px, #fff7ed 80px)',
        circularDarkLg: 'repeating-radial-gradient(rgba(255,247,237,0.4) 2px, #082f49 5px, #082f49 80px)',
        circularLightMd: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #fff7ed 5px, #fff7ed 60px)',
        circularDarkMd: 'repeating-radial-gradient(rgba(255,247,237,0.4) 2px, #082f49 5px, #082f49 60px)',
        circularLightSm: 'repeating-radial-gradient(rgba(0, 0, 0, 0.4) 2px, #fff7ed 5px, #fff7ed 50px)',
        circularDarkSm: 'repeating-radial-gradient(rgba(255,247,237,0.4) 2px, #082f49 5px, #082f49 50px)',
      }
    },
  },
  
  plugins: [],
}