/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-desktop': "url('/src/assets/footer.png')",
        'background-mobile': "url('/src/assets/background-footer-mobile.png')",
      },
      height: {
        '500': '500px',
        '650': '650px',
      },
      h3: {
        'font-size': "text-xl",
        'text-yellow-901': "#ABD832"
      },
      a: {

      }
    },
  },
  plugins: [],
}

