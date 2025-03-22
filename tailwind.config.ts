import type { Config } from "tailwindcss"
const flowbite = require("flowbite-react/tailwind")

const config: Config = {
  content: ["./src/app/**/*.{js,ts,jsx,tsx,mdx}", flowbite.content()],
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
        "butternut-yellow": "#ffe180",
        "butternut-blue": "#174f78",
        "butternut-brown": "#9d755f",
        justpark: "#1fa637",
        "ofcom-red": "#a51f44",
        "ofcom-blue": "#000045",
        "handy-blue": "#00cded",
        "handy-grey": "#434343",
        "kings-college-red": "#e12726",
        "highams-park-green": "#36562e",
        "willowfield-blue": "#263593",
      },
      fontFamily: {
        "times-new-roman": ['"Times New Roman"', "serif"],
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
  plugins: [require("@tailwindcss/forms"), flowbite.plugin()],
}
export default config
