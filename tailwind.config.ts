import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0F103F",
        secondary: "#1C1C65",
        accent: "#2F2F8A",
        highlight: "#C961DE",
        blueShade: "#2954A3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-linear": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
} satisfies Config;
