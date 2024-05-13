/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      s14: ['14px', '14px'],
      s16: ['16px', '16px'],
      s18: ['18px', '18px'],
      s22: ['22px', '22px'],
      s32: ['32px', '32px'],
    }
  },
  plugins: [],
}

