/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../templates/**/*.html",
    "./templates/**/*.html",
    "./static/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        darkblue: "#0f172a",
        purple: "#6d28d9",
        midnight: "#1e1b4b",
      },
    },
  },
  plugins: [],
}
module.exports = {
  content: [
    './theme/templates/**/*.html',
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 6s infinite',
      },
    },
  },
  plugins: [],
}

