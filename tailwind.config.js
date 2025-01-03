/** @type {import('tailwindcss').Config} **/
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        themePurple: '#800080', // Your base purple
        themePink: '#fde6f3',   // Example pink (you can customize this)
        shadowPink: '#eed1ed'
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: true, // Make sure to retain the base styling
  },
  // Add custom utility classes
  safelist: [
    {
      pattern: /line-clamp/,
    },
  ],
}

