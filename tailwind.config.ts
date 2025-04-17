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
        "fiery-red": "#ec5439",
        "sunshine-yellow": "#ffd146",
        "earth-green": "#11a832",
        "cool-blue": "#01aee9",
      },
      fontFamily: {
        "times-new-roman": ['"Times New Roman"', "serif"],
      },
    },
    keyframes: {
      bounce: {
        "0%": { transform: "translateY(0) scale(1)" },
        "25%": { transform: "translateY(-15px) scale(1.1)" },
        "50%": { transform: "translateY(0) scale(1)" },
        "75%": { transform: "translateY(-7px) scale(1.05)" },
        "100%": { transform: "translateY(0) scale(1)" },
      },
      coding: {
        "0%": { transform: "translateY(0px)" },
        "10%": { transform: "translateY(-2px)" },
        "20%": { transform: "translateY(0px)" },
        "30%": { transform: "translateY(-2px)" },
        "40%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-1px)" },
        "60%": { transform: "translateY(0px)" },
        "70%": { transform: "translateY(-2px)" },
        "80%": { transform: "translateY(0px)" },
        "90%": { transform: "translateY(-1px)" },
        "100%": { transform: "translateY(0px)" },
      },
      flip: {
        "0%": { transform: "perspective(400px) rotateY(0)" },
        "25%": { transform: "perspective(400px) rotateY(-15deg)" },
        "50%": { transform: "perspective(400px) rotateY(15deg)" },
        "75%": { transform: "perspective(400px) rotateY(-15deg)" },
        "100%": { transform: "perspective(400px) rotateY(0)" },
      },
      float: {
        "0%": { transform: "translateY(0px)" },
        "50%": { transform: "translateY(-10px)" },
        "100%": { transform: "translateY(0px)" },
      },
      screen: {
        "0%": { filter: "brightness(100%)" },
        "10%": { filter: "brightness(150%)" },
        "20%": { filter: "brightness(100%)" },
        "100%": { filter: "brightness(100%)" },
      },
      spin: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" },
      },
      tilt: {
        "0%": { transform: "rotate(-15deg)" },
        "50%": { transform: "rotate(15deg)" },
        "100%": { transform: "rotate(-15deg)" },
      },
      typing: {
        "0%": { width: "0ch" },
        "100%": { width: "var(--char-count)" },
      },
      wave: {
        "0%": { transform: "rotate(0deg)" },
        "10%": { transform: "rotate(14deg)" },
        "20%": { transform: "rotate(-8deg)" },
        "30%": { transform: "rotate(14deg)" },
        "40%": { transform: "rotate(-4deg)" },
        "50%": { transform: "rotate(10deg)" },
        "60%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(0deg)" },
      },
    },
    animation: {
      bounce: "bounce 4s ease-in-out infinite",
      coding: "coding 2s ease-in-out infinite",
      flip: "flip 5s ease-in-out infinite",
      float: "float 3s ease-in-out infinite",
      screen: "screen 2s ease-in-out infinite",
      spin: "spin 4s ease-in-out infinite",
      tilt: "tilt 3s ease-in-out infinite",
      typing: "typing 1s steps(var(--steps)) forwards",
      wave: "wave 2.5s ease-in-out infinite",
    },
  },
  plugins: [require("@tailwindcss/forms"), flowbite.plugin()],
}
export default config
