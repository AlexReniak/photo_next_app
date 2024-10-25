/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      backgroundImage: {
        'hero-image': "url('../public/images/mountain-image.jpg')",
      },
      boxShadow: {
        light: 'rgba(16, 185, 129, 0.3) 0px 18px 36px -30px',
      },
    },
  },
  plugins: [],
};
