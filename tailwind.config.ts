import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "13": "repeat(13, minmax(0, 1fr))",
      },
      colors: {
        blue: {
          400: "#2589FE",
          500: "#0070F3",
          600: "#2F6FEB",
        },
        "butternut-yellow": "#FFE180",
        "butternut-blue": "#174F78",
        "butternut-brown": "#9d755f",
        justpark: "#1FA637",
        "ofcom-red": "#A51F44",
        "ofcom-blue": "#000045",
        "handy-blue": "#00CDED",
        "handy-grey": "#434343",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
}
export default config
