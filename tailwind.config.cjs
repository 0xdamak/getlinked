/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "gl-white": "#FFFFFF",
      "gl-purple": "#D434FE",
      "gl-magenta": "#FF26B9",
      "gl-veronica": "#903AFF",
      "gl-blue-black": "#150E28",
      "gl-china-black": "#100B20",
      "gl-eerie-black": "#140D27",
    },
    gradientColors: {
      "veronica-pink-gradient":
        "linear-gradient(270deg, #903AFF 0%, #FE34B9 100%)",
    },
    extend: {
      fontFamily: {
        "clash-display": ["ClashDisplay", "Arial", "sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
